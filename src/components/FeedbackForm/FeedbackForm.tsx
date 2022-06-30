import type { VNode } from 'vue';
import { defineComponent, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import Button from '@/components/Button';
import RatingEmojis from '@/components/RatingEmojis';
import SelectMenu from '@/components/SelectMenu';
import './FeedbackForm.css';

export default defineComponent({
  name: 'FeedbackForm',
  setup() {
    const { t } = useI18n();
    const feedbackForm = ref<HTMLFormElement | undefined>();
    const formName = 'feedback';

    /** Handles error messages when the user has not chosen a rating for the app. */
    function handleInvalidRating(event: Event): void {
      return (event.target as HTMLInputElement)?.setCustomValidity(
        t('errorRating')
      );
    }

    /**
     * Handles form submission.
     * @link https://docs.netlify.com/forms/setup/
     */
    function handleSubmit(event: Event): void {
      event.preventDefault();
      const formData = new FormData(feedbackForm.value);
      fetch('/', {
        /* eslint-disable @typescript-eslint/ban-ts-comment */
        // @ts-ignore TypeScript does not support this method yet.
        body: new URLSearchParams(formData).toString(),
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        method: 'POST',
      })
        .then(console.debug)
        .catch(console.error);
    }

    return { feedbackForm, formName, handleInvalidRating, handleSubmit };
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
          <Button class="button-primary" type="submit">
            {this.$t('sendFeedback')}
          </Button>
        </p>
      </form>
    );
  },
});
