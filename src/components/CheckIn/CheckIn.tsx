import type { Location, Translations } from '@/types';
import type { VNode } from 'vue';
import {
  computed,
  defineComponent,
  onBeforeUnmount,
  onMounted,
  ref,
  watch,
} from 'vue';
import { useI18n } from 'vue-i18n';
import { RouterLink, useRouter } from 'vue-router';
import { locations } from '@/content/locations';
import Button from '@/components/Button';
import LocateIcon from '@/assets/icons/locate.svg?component';
import './CheckIn.css';

export default defineComponent({
  name: 'CheckIn',
  setup() {
    const { d, t } = useI18n();
    const router = useRouter();

    /** Adds an additional description to the button. */
    const ariaDescribedby = computed(() =>
      Boolean(!isButtonHidden.value) && Boolean(checkInLabelI18nKey.value)
        ? 'check-in-label'
        : undefined
    );

    /**
     * Key for the help text translation.
     * @default ''
     */
    const checkInLabelI18nKey = ref<keyof Translations['checkInLabel'] | null>(
      null
    );

    /**
     * Check-in label text or element.
     * @default null
     */
    const checkInLabel = ref<null | string | VNode>(null);

    /**
     * Disables the button if set to `true`.
     * @default true
     */
    const isButtonDisabled = ref(true);

    /**
     * Hides the button if set to `true`.
     * @default true
     */
    const isButtonHidden = ref(true);

    /** ID of the current location. */
    const locationId = router.currentRoute.value.name?.toString() || '';

    /** Current location. */
    const location = locations.find(
      (location) => location.params === locationId
    ) as Location;

    /**
     * Keeps track of the watch event ID from the Geolocation API.
     * @link https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/watchPosition#return_value
     */
    const geolocationWatchId = ref<null | number>(null);

    /**
     * Watch options for the Geolocation API.
     * @link https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/watchPosition#options
     */
    const geolocationWatchPositionOptions: PositionOptions = {
      enableHighAccuracy: true,
      timeout: 5000,
    };

    /**
     * Measures the distance between two points.
     *
     * @link https://stackoverflow.com/a/21623256
     * @returns Distance in km rounded to two decimals.
     */
    function measureDistance(
      latitude1: number,
      longitude1: number,
      latitude2: number,
      longitude2: number
    ): number {
      const earthRadius = 6371; // Radius of the Earth in km
      const latitude = ((latitude2 - latitude1) * Math.PI) / 180;
      const longitude = ((longitude2 - longitude1) * Math.PI) / 180;
      const a =
        0.5 -
        Math.cos(latitude) / 2 +
        (Math.cos((latitude1 * Math.PI) / 180) *
          Math.cos((latitude2 * Math.PI) / 180) *
          (1 - Math.cos(longitude))) /
          2;
      return (
        Math.round(
          (earthRadius * 2 * Math.asin(Math.sqrt(a)) + Number.EPSILON) * 100
        ) / 100
      );
    }

    /** Restarts the Geolocation API watch service. */
    function restartGeolocationWatch(): void {
      clearGeolocationWatch(geolocationWatchId.value);
      startGeolocationWatch();
    }

    /**
     * Handles errors related to the Geolocation API.
     * @link https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/watchPosition#error
     */
    function handleGeolocationError(error: GeolocationPositionError): void {
      switch (error.code) {
        case error.PERMISSION_DENIED:
          console.info('User denied permission to use the Geolocation API.');
          clearGeolocationWatch(geolocationWatchId.value);
          checkInLabelI18nKey.value = 'unavailable';
          break;
        case error.TIMEOUT:
          console.log('The Geolocation API timed out.');
          restartGeolocationWatch();
          break;
        case error.POSITION_UNAVAILABLE:
        default:
          console.error('The Geolocation API is unavailable.');
          checkInLabelI18nKey.value = 'unavailable';
      }
    }

    /**
     * Handles the success event from the Geolocation API.
     * @link https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/watchPosition#success
     */
    function handleGeolocationSuccess(position: GeolocationPosition): void {
      const deviceLatitude = position.coords.latitude;
      const deviceLongitude = position.coords.longitude;
      const distanceFromLocation = measureDistance(
        deviceLatitude,
        deviceLongitude,
        location.coordinates[0],
        location.coordinates[1]
      );
      const closeEnough = distanceFromLocation < location.minDistance;
      console.debug(
        `🌍 Location received: ↕ Latitude: ${deviceLatitude} ° ፨ ↔ Longitude: ${deviceLongitude} °`
      );
      console.debug(
        `🗺 See location on the map: https://www.openstreetmap.org/#map=18/${deviceLatitude}/${deviceLongitude}`
      );
      console.info('Device is', closeEnough ? 'close enough' : 'too far.');
      console.debug(
        'Distance from location (km):',
        distanceFromLocation,
        '፨ Minimum distance required (km):',
        location.minDistance
      );
      // Add slight delay to have time to see the animation
      setTimeout(() => {
        checkInLabelI18nKey.value = closeEnough ? 'enabled' : 'disabled';
      }, 1000);
    }

    /**
     * Handles submit event from check-in form.
     * @todo Implement logic.
     */
    function handleSubmit(event: Event): void {
      event.preventDefault();
      console.debug('Check-in event:', event);
    }

    /** Cached render of the `complete` label. */
    const labelComplete: VNode = (
      <i18n-t keypath="checkInLabel.complete.label" scope="global">
        <em class="block">
          <time datetime={new Date().toString()}>{d(new Date(), 'long')}</time>
        </em>
        <strong>{t('checkInLabel.complete.helpText')}</strong>
      </i18n-t>
    );

    /** Cached render of the `disabled` label. */
    const labelDisabled: VNode = (
      <i18n-t keypath="checkInLabel.disabled.label" scope="global">
        <RouterLink to={{ name: 'map', params: { id: locationId } }}>
          {t('checkInLabel.disabled.linkText')}
        </RouterLink>
      </i18n-t>
    );

    /** Cached render of the `enabled` label. */
    const labelEnabled: VNode = (
      <i18n-t keypath="checkInLabel.enabled.label" scope="global">
        <strong class="block">{t('checkInLabel.enabled.helpText')}</strong>
      </i18n-t>
    );

    /** Cached render of the `locating` label. */
    const labelLocating: VNode = (
      <i18n-t keypath="checkInLabel.locating.label" scope="global">
        <LocateIcon class="icon" />
      </i18n-t>
    );

    /** Cached render of the Geolocation API is unavailable label. */
    const labelUnavailable: VNode = (
      <i18n-t
        class="block"
        keypath="checkInLabel.unavailable.label"
        scope="global"
      >
        <strong>{t('checkInLabel.unavailable.helpText')}</strong>
      </i18n-t>
    );

    /** Cached render of the `visited` label. */
    const labelVisited: VNode = (
      <i18n-t keypath="checkInLabel.visited.label" scope="global">
        <em class="block">
          <time datetime={new Date().toString()}>{d(new Date(), 'long')}</time>
        </em>
        <RouterLink to={{ name: 'map', params: { id: 'aurora' } }}>
          {t('checkInLabel.visited.linkText')}
        </RouterLink>
      </i18n-t>
    );

    /**
     * Starts tracking device location if Geolocation API is present.
     * Disables check-ins if API is unavailable.
     *
     * @link https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/watchPosition
     */
    function startGeolocationWatch(): void {
      if (navigator.geolocation) {
        console.log('🧭 Attempting to locate device …');
        geolocationWatchId.value = navigator.geolocation.watchPosition(
          handleGeolocationSuccess,
          handleGeolocationError,
          geolocationWatchPositionOptions
        );
      } else {
        console.info('Geolocation is not supported by this browser.');
        checkInLabelI18nKey.value = 'unavailable';
      }
    }

    /** Restores default values. */
    function restoreDefaultValues(): void {
      isButtonDisabled.value = true;
      isButtonHidden.value = true;
    }

    /**
     * Clears the Geolocation watch event if present.
     * @link https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/clearWatch
     */
    function clearGeolocationWatch(eventId: null | number): void {
      if (!navigator.geolocation || null === eventId) return;
      navigator.geolocation.clearWatch(eventId);
    }

    /** Handles check-in states. */
    function handleCheckInState(key: typeof checkInLabelI18nKey.value): void {
      restoreDefaultValues();
      switch (key) {
        case 'complete':
          checkInLabel.value = labelComplete;
          break;
        case 'disabled':
          checkInLabel.value = labelDisabled;
          isButtonHidden.value = false;
          break;
        case 'enabled':
          checkInLabel.value = labelEnabled;
          isButtonDisabled.value = false;
          isButtonHidden.value = false;
          break;
        case 'locating':
          checkInLabel.value = labelLocating;
          break;
        case 'unavailable':
          checkInLabel.value = labelUnavailable;
          break;
        case 'visited':
          checkInLabel.value = labelVisited;
          break;
        default:
          checkInLabel.value =
            checkInLabelI18nKey.value &&
            t(`checkInLabel.${checkInLabelI18nKey.value}`);
      }
    }

    onBeforeUnmount(() => {
      clearGeolocationWatch(geolocationWatchId.value);
    });

    onMounted(() => {
      checkInLabelI18nKey.value = 'locating';
      startGeolocationWatch();
    });

    /**
     * Watches for changes and updates check-in states.
     */
    watch(checkInLabelI18nKey, handleCheckInState);

    return {
      ariaDescribedby,
      checkInLabel,
      checkInLabelI18nKey,
      handleSubmit,
      isButtonDisabled,
      isButtonHidden,
    };
  },
  render(): VNode {
    return (
      <form class="check-in" onSubmit={this.handleSubmit}>
        <Button
          aria-describedby={this.ariaDescribedby}
          class="btn-primary"
          disabled={this.isButtonDisabled}
          hidden={this.isButtonHidden}
          type="submit"
        >
          {this.$t('checkInButton')}
        </Button>
        <p class="label" id="check-in-label">
          {this.checkInLabel || <>&nbsp;</>}
        </p>
      </form>
    );
  },
});
