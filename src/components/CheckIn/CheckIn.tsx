import type { CheckIn, Location, Translations } from '@/types';
import type { PropType, Ref, VNode } from 'vue';
import {
  computed,
  defineComponent,
  onBeforeUnmount,
  onMounted,
  ref,
  watch,
} from 'vue';
import { useI18n } from 'vue-i18n';
import { RouterLink, useRoute } from 'vue-router';
import { getCheckIn, getCheckIns } from './utils';
import LocateIcon from '@/assets/icons/locate.svg?component';
import Button from '@/components/Button';
import { locations } from '@/content/locations';
import './CheckIn.css';

export default defineComponent({
  name: 'CheckIn',
  props: {
    onCheckIn: {
      default: () => null,
      required: true,
      type: Function as PropType<(checkIn: CheckIn) => void>,
    },
  },
  setup(props) {
    const { d, locale, t } = useI18n();
    const hasGeolocationSupport = ref(true);
    const route = useRoute();

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
    const locationSlug = route.params.id?.toString() || '';

    /** Existing check-in for the current location.*/
    const existingCheckIn: Ref<CheckIn | null> = ref(
      getCheckIn(locationSlug) || null
    );

    /** Current location. */
    const location = locations.find(
      (location) => location.slug === locationSlug
    ) as Location;

    if (!location) {
      console.warn('Location missing for slug:', locationSlug);
    }

    /** Location index used to determine next location. */
    const locationIndex = locations.findIndex(
      (location) => location.slug === locationSlug
    );

    /** Contains the next location if available. */
    const nextLocation = locations[locationIndex + 1];
    console.debug('Next location:', nextLocation);

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
      timeout: 2000,
    };

    /** Returns true if this is the last location. */
    const isLastLocation = !nextLocation;

    /**
     * Clears the Geolocation watch event if present.
     * @link https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/clearWatch
     */
    function clearGeolocationWatch(eventId: null | number): void {
      if (!navigator.geolocation || null === eventId) return;
      console.log('Stopping Geolocation watch service.');
      navigator.geolocation.clearWatch(eventId);
    }

    /**
     * Handles check-in events.
     */
    function handleCheckIn(event: Event): void {
      event.preventDefault();
      const visited = new Date();
      const checkIn: CheckIn = { locationSlug, visited };
      console.info('User checked-in to', locationSlug, 'at', visited);
      saveCheckIn(checkIn);
      existingCheckIn.value = checkIn;
      props.onCheckIn && props.onCheckIn(checkIn);
      checkInLabelI18nKey.value = isLastLocation ? 'complete' : 'visited';
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

    /**
     * Handles errors related to the Geolocation API.
     * @link https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/watchPosition#error
     */
    function handleGeolocationError(error: GeolocationPositionError): void {
      switch (error.code) {
        case error.PERMISSION_DENIED:
          console.info('User denied permission to use the Geolocation API.');
          clearGeolocationWatch(geolocationWatchId.value);
          checkInLabelI18nKey.value = 'enabled'; // unavailable
          hasGeolocationSupport.value = false;
          break;
        case error.TIMEOUT:
          console.log('The Geolocation API timed out.');
          if (existingCheckIn.value) {
            clearGeolocationWatch(geolocationWatchId.value);
          } else {
            restartGeolocationWatch();
          }
          break;
        case error.POSITION_UNAVAILABLE:
        default:
          console.error('The Geolocation API is unavailable.');
          hasGeolocationSupport.value = false;
          checkInLabelI18nKey.value = 'enabled'; // unavailable
      }
    }

    /**
     * Handles the success event from the Geolocation API.
     * @link https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/watchPosition#success
     */
    function handleGeolocationSuccess(position: GeolocationPosition): void {
      if (existingCheckIn.value) {
        clearGeolocationWatch(geolocationWatchId.value);
        return;
      }
      const deviceLatitude = position.coords.latitude;
      const deviceLongitude = position.coords.longitude;
      const distanceFromLocation = measureDistance(
        deviceLatitude,
        deviceLongitude,
        location.coordinates.lat,
        location.coordinates.lng
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

    /** Cached render of the `complete` label. */
    const labelComplete: VNode = (
      <i18n-t keypath="checkInLabel.complete.label" scope="global">
        <time
          class="time"
          datetime={new Date(existingCheckIn.value?.visited || '').toString()}
        >
          {d(new Date(existingCheckIn.value?.visited || ''), 'long')}
        </time>
        <strong class="sub-label">{t('checkInLabel.complete.helpText')}</strong>
      </i18n-t>
    );

    /** Cached render of the `disabled` label. */
    const labelDisabled: VNode = (
      <i18n-t keypath="checkInLabel.disabled.label" scope="global">
        <RouterLink
          class="sub-label"
          to={{ name: 'mapWithPopup', params: { id: locationSlug } }}
        >
          {t('checkInLabel.disabled.linkText')}
        </RouterLink>
      </i18n-t>
    );

    /** Cached render of the `enabled` label. */
    const labelEnabled: VNode = checkInLabel.value ? (
      <i18n-t keypath="checkInLabel.enabled.label" scope="global">
        <strong class="sub-label">{t('checkInLabel.enabled.helpText')}</strong>
      </i18n-t>
    ) : (
      <p>{t('checkInLabel.enabled.helpText')}</p>
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
        <strong class="sub-label">
          {t('checkInLabel.unavailable.helpText')}
        </strong>
      </i18n-t>
    );

    /** Cached render of the `visited` label. */
    const labelVisited: VNode = (
      <i18n-t keypath="checkInLabel.visited.label" scope="global">
        <time
          class="time"
          datetime={new Date(existingCheckIn.value?.visited || '').toString()}
        >
          {d(new Date(existingCheckIn.value?.visited || ''), 'long')}
        </time>
        <RouterLink
          class="sub-label large"
          to={{ name: 'mapWithPopup', params: { id: nextLocation?.slug } }}
        >
          {t('checkInLabel.visited.linkText')}
        </RouterLink>
      </i18n-t>
    );

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
        hasGeolocationSupport.value = false;
        checkInLabelI18nKey.value = 'enabled'; // unavailable
      }
    }

    /** Restores default values. */
    function restoreDefaultValues(): void {
      isButtonDisabled.value = true;
      isButtonHidden.value = true;
    }

    /** Restarts the Geolocation API watch service. */
    function restartGeolocationWatch(): void {
      clearGeolocationWatch(geolocationWatchId.value);
      startGeolocationWatch();
    }

    /** Saves check-ins to Local Storage. */
    function saveCheckIn(checkIn: CheckIn): void {
      try {
        const checkIns = getCheckIns();
        checkIns.push(checkIn);
        console.debug('Saving check-in:', checkIn);
        window.localStorage.setItem('check-ins', JSON.stringify(checkIns));
      } catch (error) {
        console.warn('Unable to save check-in.');
        console.error(error);
      }
    }

    onBeforeUnmount(() => {
      clearGeolocationWatch(geolocationWatchId.value);
    });

    onMounted(() => {
      if (existingCheckIn.value) {
        checkInLabelI18nKey.value = isLastLocation ? 'complete' : 'visited';
      } else {
        checkInLabelI18nKey.value = 'locating';
        startGeolocationWatch();
      }
    });

    /** Re-render check-in labels when locale changes. */
    watch(locale, () => handleCheckInState(checkInLabelI18nKey.value));

    /**
     * Watches for changes and updates check-in states.
     */
    watch(checkInLabelI18nKey, handleCheckInState);

    return {
      ariaDescribedby,
      checkInLabel,
      checkInLabelI18nKey,
      handleCheckIn,
      isButtonDisabled,
      isButtonHidden,
    };
  },
  render(): VNode {
    return (
      <form class="check-in" onSubmit={this.handleCheckIn}>
        <Button
          aria-describedby={this.ariaDescribedby}
          class="button button-primary"
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
