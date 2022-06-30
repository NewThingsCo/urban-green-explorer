import { computed, PropType, VNode, defineComponent, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import Button from '@/components/Button';
import RatingEmojis from '@/components/RatingEmojis';
import SelectMenu from '@/components/SelectMenu';
import './FeedbackForm.css';

export default defineComponent({
  name: 'FeedbackForm',
  props: {
    onSuccess: {
      default: null,
      type: Function as PropType<(event: Event) => void>,
    },
  },
  setup(props) {
    const { t } = useI18n();
    const errorTimeout = 5000;
    const feedbackForm = ref<HTMLFormElement | undefined>();
    const formName = 'feedback';
    const hasError = ref<null | NodeJS.Timeout>(null);
    const isButtonDisabled = computed(
      () => Boolean(hasError.value) || Boolean(isSubmitting.value)
    );
    const isSubmitting = ref(false);

    /** Handles error messages when the user has not chosen a rating for the app. */
    function handleInvalidRating(event: Event): void {
      return (event.target as HTMLInputElement)?.setCustomValidity(
        t('errorRating')
      );
    }

    /** Handles form submission errors. */
    function handleError(): void {
      hasError.value = setTimeout(resetError, errorTimeout);
    }

    /** Handles successful form submissions. */
    function handleSuccess(event: Event): void {
      if (props?.onSuccess) props.onSuccess(event);
    }

    /** Resets error timeouts. */
    function resetError(): void {
      if (!hasError.value) return;
      clearTimeout(hasError.value);
      hasError.value = null;
    }

    /**
     * Handles form submission.
     * @link https://docs.netlify.com/forms/setup/
     */
    async function handleSubmit(event: Event): Promise<void> {
      event.preventDefault();
      resetError();
      isSubmitting.value = true;
      try {
        const formData = new FormData(feedbackForm.value);
        const response = await fetch('/', {
          /* eslint-disable @typescript-eslint/ban-ts-comment */
          // @ts-ignore TypeScript does not support this method yet.
          body: new URLSearchParams(formData).toString(),
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          method: 'POST',
        });
        console.debug('Form submitted successfully:', response);
        isSubmitting.value = false;
        handleSuccess(event);
      } catch (error) {
        console.error('Unable submit feedback:', error);
        isSubmitting.value = false;
        handleError();
      }
    }

    return {
      feedbackForm,
      formName,
      handleInvalidRating,
      handleSubmit,
      hasError,
      isButtonDisabled,
    };
  },
  render(): VNode {
    return (
      <form
        class="feedback-form"
        data-netlify-honeypot="bot-field"
        data-netlify="true"
        method="POST"
        name={this.formName}
        onSubmit={this.handleSubmit}
        ref="feedbackForm"
      >
        <input name="form-name" type="hidden" value={this.formName} />
        <input name="subject" type="hidden" value={this.$t('emailSubject')} />
        <p class="ingress">{this.$t('feedbackDescription')}</p>
        <RatingEmojis
          fieldsetTitle={this.$t('rating')}
          legendText={this.$t('ratingDescription')}
          onInvalid={this.handleInvalidRating}
          required={true}
        />
        <p class="input-group">
          <label class="label">
            <span class="label-text">{`${this.$t('name')} ${this.$t(
              'optional'
            )}`}</span>
            <input class="input" name="name" type="text" />
          </label>
        </p>
        <p class="input-group">
          <label class="label">
            <span class="label-text">{`${this.$t('email')} ${this.$t(
              'optional'
            )}`}</span>
            <input class="input" name="email" type="email" />
          </label>
        </p>
        <p class="input-group">
          <label>
            <span class="label-text">{`${this.$t('subject')} ${this.$t(
              'optional'
            )}`}</span>
            <SelectMenu
              selectName="category"
              selectOptions={{
                bug: this.$t('topicBug'),
                idea: this.$t('topicFeature'),
                privacy: this.$t('topicPrivacy'),
                other: this.$t('topicOther'),
              }}
            />
          </label>
        </p>
        <p class="input-group">
          <label>
            <span class="label-text">{`${this.$t('message')} ${this.$t(
              'optional'
            )}`}</span>
            <textarea class="textarea" name="message"></textarea>
          </label>
        </p>
        <div data-netlify-recaptcha="true"></div>
        <p class="input-group">
          <Button
            class="button-primary"
            disabled={this.isButtonDisabled}
            type="submit"
          >
            {this.$t('sendFeedback')}
          </Button>
        </p>
        {!this.hasError && (
          <p class="mt-3 text-gray-400">{this.$t('errorFeedback')}</p>
        )}
      </form>
    );
  },
});
