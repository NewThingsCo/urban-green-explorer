/* eslint-disable  no-irregular-whitespace */
import type { VNode } from 'vue';
import { defineComponent, ref } from 'vue';
import AppFooter from '@/components/AppFooter';
import AppHeader from '@/components/AppHeader';
import AppMain from '@/components/AppMain';
import BackLink from '@/components/BackLink';
import FeedbackForm from '@/components/FeedbackForm';
import FeedbackThanks from '@/components/FeedbackThanks';
import './FeedbackPage.css';

export default defineComponent({
  name: 'FeedbackPage',
  setup() {
    const hasSubmittedFeedback = ref(false);

    /** Handles success event from feedback form. */
    function handleSuccess(event: Event): void {
      console.debug('Received success event:', event);
      hasSubmittedFeedback.value = true;
    }

    return { handleSuccess, hasSubmittedFeedback };
  },
  render(): VNode {
    return (
      <>
        <AppHeader />
        <AppMain class="main-feedback main-wrapper">
          <BackLink />
          <h1 class="page-title">{this.$t('feedback')}</h1>
          {this.hasSubmittedFeedback ? (
            <FeedbackThanks />
          ) : (
            <FeedbackForm onSuccess={this.handleSuccess} />
          )}
        </AppMain>
        <AppFooter />
      </>
    );
  },
});
