import type { Translations } from '@/types';
import {
  onBeforeUnmount,
  VNode,
  computed,
  defineComponent,
  onMounted,
  ref,
  watch,
} from 'vue';
import { useI18n } from 'vue-i18n';
import { RouterLink } from 'vue-router';
import Button from '@/components/Button';
import LocateIcon from '@/assets/icons/locate.svg?component';
import './CheckIn.css';

export default defineComponent({
  name: 'CheckIn',
  setup() {
    const { d, t } = useI18n();

    /** Adds an additional description to the button. */
    const ariaDescribedby = computed(() =>
      Boolean(!hidden.value) && Boolean(checkInLabelI18nKey.value)
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
    const disabled = ref(true);

    /**
     * Hides the button if set to `true`.
     * @default true
     */
    const hidden = ref(true);

    /** @todo Get this from the page params. */
    const locationId = 'aurora';

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
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      /** @todo Add function call to verify distance from target. */
      const closeEnough = false;
      console.debug(
        `🌍 Location received: ↕ Latitude: ${latitude} ° ፨ ↔ Longitude: ${longitude} °`
      );
      console.debug(
        `🗺 See location on the map: https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`
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

    /** Cached render of the complete label. */
    const labelComplete: VNode = (
      <i18n-t keypath="checkInLabel.complete.label" scope="global">
        <em class="block">
          <time datetime={new Date().toString()}>{d(new Date(), 'long')}</time>
        </em>
        <strong>{t('checkInLabel.complete.helpText')}</strong>
      </i18n-t>
    );

    /** Cached render of the location is disabled label. */
    const labelDisabled: VNode = (
      <i18n-t keypath="checkInLabel.disabled.label" scope="global">
        <RouterLink to={{ name: 'map', params: { id: locationId } }}>
          {t('checkInLabel.disabled.linkText')}
        </RouterLink>
      </i18n-t>
    );

    /** Cached render of the location is enabled label. */
    const labelEnabled: VNode = (
      <i18n-t keypath="checkInLabel.enabled.label" scope="global">
        <strong class="block">{t('checkInLabel.enabled.helpText')}</strong>
      </i18n-t>
    );

    /** Cached render of the locating label. */
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

    /** Cached render of the visited label. */
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
      checkInLabelI18nKey.value = 'locating';
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
      disabled.value = true;
      hidden.value = true;
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
          hidden.value = false;
          break;
        case 'enabled':
          checkInLabel.value = labelEnabled;
          disabled.value = false;
          hidden.value = false;
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
      startGeolocationWatch();
    });

    /**
     * Watches for changes and updates check-in states.
     */
    watch(checkInLabelI18nKey, handleCheckInState);

    return {
      ariaDescribedby,
      checkInLabelI18nKey,
      checkInLabel,
      disabled,
      handleSubmit,
      hidden,
    };
  },
  render(): VNode {
    return (
      <form class="check-in" onSubmit={this.handleSubmit}>
        <Button
          aria-describedby={this.ariaDescribedby}
          class="btn-primary"
          disabled={this.disabled}
          hidden={this.hidden}
          type="submit"
        >
          {this.$t('checkInButton')}
        </Button>
        <p class="label" id="check-in-label">
          {this.checkInLabel || <>&nbsp;</>}
        </p>
        <fieldset class="debug mb-6 text-sm">
          <legend class="my-3 mx-auto">Toggle check-in states</legend>
          <select
            class="select select-primary w-full max-w-xs"
            v-model={this.checkInLabelI18nKey}
          >
            <option disabled selected>
              Select check-in state
            </option>
            <option value={null}>None</option>
            <option value="complete">Complete</option>
            <option value="disabled">Disabled</option>
            <option value="enabled">Enabled</option>
            <option value="locating">Locating</option>
            <option value="unavailable">Unavailable</option>
            <option value="visited">Visited</option>
          </select>
        </fieldset>
      </form>
    );
  },
});
