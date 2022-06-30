/* eslint-disable  no-irregular-whitespace */
import type { VNode } from 'vue';
import { defineComponent } from 'vue';
import AppFooter from '@/components/AppFooter';
import AppHeader from '@/components/AppHeader';
import AppMain from '@/components/AppMain';
import BackLink from '@/components/BackLink';
import FeedbackForm from '@/components/FeedbackForm';
import './FeedbackPage.css';

export default defineComponent({
  name: 'FeedbackPage',
  render(): VNode {
    return (
      <>
        <AppHeader />
        <AppMain class="main-feedback main-wrapper">
          <BackLink />
          <h1 class="page-title">{this.$t('feedback')}</h1>
          <p class="ingress">{this.$t('feedbackDescription')}</p>
          <FeedbackForm />
        </AppMain>
        <AppFooter />
      </>
    );
  },
});
