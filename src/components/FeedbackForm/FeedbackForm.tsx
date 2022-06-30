import type { VNode } from 'vue';
import { defineComponent, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import AngryIcon from '@/assets/icons/angry.svg?component';
import FrownIcon from '@/assets/icons/frown.svg?component';
import GrinIcon from '@/assets/icons/grin.svg?component';
import MehIcon from '@/assets/icons/meh.svg?component';
import SmileIcon from '@/assets/icons/smile.svg?component';
import Button from '@/components/Button';
import SelectMenu from '@/components/SelectMenu';
import './FeedbackForm.css';

export default defineComponent({
  name: 'FeedbackForm',
  setup() {
    const { t } = useI18n();
    const feedbackForm = ref<HTMLFormElement | undefined>();

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

    return { feedbackForm, handleInvalidRating, handleSubmit };
  },
  render(): VNode {
    return (
      <form
        class="feedback-form"
        data-netlify-recaptcha="true"
        data-netlify="true"
        method="POST"
        name="feedback"
        onSubmit={this.handleSubmit}
        ref="feedbackForm"
      >
        <fieldset class="rating" title={this.$t('rating')}>
          <legend class="legend">{this.$t('ratingDescription')}</legend>
          <ul class="flex justify-center">
            <li>
              <label class="label">
                <input
                  class="hidden-radio"
                  name="rating"
                  onInvalid={this.handleInvalidRating}
                  required
                  type="radio"
                  value="1"
                />
                <AngryIcon class="icon" />
              </label>
            </li>
            <li>
              <label class="label">
                <input
                  class="hidden-radio"
                  name="rating"
                  onInvalid={this.handleInvalidRating}
                  required
                  type="radio"
                  value="2"
                />
                <FrownIcon class="icon" />
              </label>
            </li>
            <li>
              <label class="label">
                <input
                  class="hidden-radio"
                  name="rating"
                  onInvalid={this.handleInvalidRating}
                  required
                  type="radio"
                  value="3"
                />
                <MehIcon class="icon" />
              </label>
            </li>
            <li>
              <label class="label">
                <input
                  class="hidden-radio"
                  name="rating"
                  onInvalid={this.handleInvalidRating}
                  required
                  type="radio"
                  value="4"
                />
                <SmileIcon class="icon" />
              </label>
            </li>
            <li>
              <label class="label">
                <input
                  class="hidden-radio"
                  name="rating"
                  onInvalid={this.handleInvalidRating}
                  required
                  type="radio"
                  value="5"
                />
                <GrinIcon class="icon" />
              </label>
            </li>
          </ul>
        </fieldset>
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
              selectName="subject"
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
        <input name="subject" type="hidden" value={this.$t('emailSubject')} />
      </form>
    );
  },
});
