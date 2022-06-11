import type { VNode } from 'vue';
import { defineComponent } from 'vue';
import AppFooter from '@/components/AppFooter';
import AppHeader from '@/components/AppHeader';
import AppMain from '@/components/AppMain';
import './InfoPage.css';

export default defineComponent({
  name: 'InfoPage',
  render(): VNode {
    return (
      <>
        <AppHeader />
        <AppMain class="info-wrapper">
          <div class="content main-wrapper">
            <h1 class="title page-title">{this.$t('info.title')}</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div class="contact">
              <h2 class="contact-title">{this.$t('contact')}</h2>
              <div class="contact-box">
                <label>Label</label>
                <h3 class="font-semibold text-lg">Title</h3>
                <div class="text-sm">Description</div>
              </div>
            </div>
          </div>
          <iframe class="form" src={this.$t('feedbackFormUrl')}>
            Loading…
          </iframe>
        </AppMain>
        <AppFooter />
      </>
    );
  },
});
