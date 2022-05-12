import type { Translations } from '@/types';
import { VNode, watch, computed, defineComponent, ref } from 'vue';
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
    const disabled = ref(false);

    /**
     * Hides the button if set to `true`.
     * @default false
     */
    const hidden = ref(false);

    /** Cached render of the unavailable label. */
    const unavailableLabel = (
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

    /** Restores default values. */
    function restoreDefaultValues(): void {
      disabled.value = false;
      hidden.value = false;
    }

    /**
     * Handles submit event from check-in form.
     * @todo Implement logic.
     */
    function handleGeolocation(event?: Event): void {
      event?.preventDefault();
      console.info('Geolocation requested.');
    }

    /**
     * Handles submit event from check-in form.
     * @todo Implement logic.
     */
    function handleSubmit(event: Event): void {
      event.preventDefault();
      console.debug('Check-in event:', event);
    }

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
          disabled.value = true;
          break;
        case 'unavailable':
          checkInLabel.value = unavailableLabel;
          disabled.value = true;
          break;
        default:
          checkInLabel.value =
            checkInLabelI18nKey.value &&
            t(`checkInLabel.${checkInLabelI18nKey.value}`);
      }
    }

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
        <p class="my-6">Toggle check-in states</p>
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
          <option value="unavailable">Unavailable</option>
          <option value="visited">Visited</option>
        </select>
      </form>
    );
  },
});
