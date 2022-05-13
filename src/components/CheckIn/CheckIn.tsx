import type { Translations } from '@/types';
import { computed, defineComponent, onMounted, ref, VNode, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import Button from '@/components/Button';
import './CheckIn.css';

export default defineComponent({
  name: 'CheckIn',
  setup() {
    const { t } = useI18n();

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
    const checkInLabel = ref<VNode | string | null>(null);

    /**
     * Disables the button if set to `true`.
     * @default false
     */
    const disabled = ref(true);

    /**
     * Hides the button if set to `true`.
     * @default false
     */
    const hidden = ref(true);

    /**
     * Handles submit event from check-in form.
     */
    function handleGeolocation(event?: Event): void {
      event?.preventDefault();
      console.info('Geolocation requested.');
      locateDevice();
    }

    /**
     * Handles errors related to the Geolocation API.
     * @todo Show alert.
     */
    function handleGeolocationError(): void {
      console.error('Geolocation API offline.');
      checkInLabelI18nKey.value = 'unavailable';
    }

    /**
     * Handles the success event from the Geolocation API.
     * @todo Verify distance from target.
     */
    function handleGeolocationSuccess(position: GeolocationPosition): void {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      const closeEnough = false;
      console.info('✅ Location found.');
      console.debug(`↕ Latitude: ${latitude} ° ፨ ↔ Longitude: ${longitude} °`);
      console.log(
        'See location on the map:',
        `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`
      );
      checkInLabelI18nKey.value = closeEnough ? 'enabled' : 'enabled';
    }

    /**
     * Handles submit event from check-in form.
     * @todo Implement logic.
     */
    function handleSubmit(event: Event): void {
      event.preventDefault();
      console.debug('Check-in event:', event);
    }

    /** Attempts to locate a device using the Geolocation API. */
    function locateDevice(): void {
      if (!navigator.geolocation) {
        console.info('Geolocation is not supported by this browser.');
      } else {
        console.info('🧭 Locating …');
        navigator.geolocation.getCurrentPosition(
          handleGeolocationSuccess,
          handleGeolocationError
        );
      }
    }

    /** Restores default values. */
    function restoreDefaultValues(): void {
      disabled.value = true;
      hidden.value = true;
    }

    /** Cached render of the Geolocation API is unavailable label. */
    const unavailableLabel: VNode = (
      <i18n-t keypath="checkInLabel.unavailable.text" scope="global">
        <Button
          class="btn-xs btn-link"
          onClick={handleGeolocation}
          type="button"
        >
          {t('checkInLabel.unavailable.label')}
        </Button>
      </i18n-t>
    );

    /** Handles check-in state. */
    function handleCheckInState(key: typeof checkInLabelI18nKey.value): void {
      restoreDefaultValues();
      switch (key) {
        case 'complete':
          checkInLabel.value = t(`checkInLabel.complete`);
          hidden.value = true;
          break;
        case 'disabled':
          checkInLabel.value = t(`checkInLabel.disabled`);
          hidden.value = false;
          break;
        case 'enabled':
          checkInLabel.value = t(`checkInLabel.enabled`);
          disabled.value = false;
          hidden.value = false;
          break;
        case 'locating':
          checkInLabel.value = t(`checkInLabel.locating`);
          disabled.value = true;
          hidden.value = false;
          break;
        case 'unavailable':
          checkInLabel.value = unavailableLabel;
          disabled.value = true;
          hidden.value = true;
          break;
        default:
          checkInLabel.value =
            checkInLabelI18nKey.value &&
            t(`checkInLabel.${checkInLabelI18nKey.value}`);
      }
    }

    onMounted(() => {
      checkInLabelI18nKey.value = 'locating';
      locateDevice();
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
        <fieldset class="debug">
          <legend class="my-6 mx-auto">Toggle check-in states</legend>
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
