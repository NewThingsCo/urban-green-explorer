import { defineComponent } from 'vue';
import MainContent from '@/components/MainContent';
import MainFooter from '@/components/MainFooter';
import MainHeader from '@/components/MainHeader';

export default defineComponent({
  name: 'AboutPage',
  render() {
    return (
      <>
        <MainHeader />
        <MainContent class="main-wrapper">
          <h1 class="title page-title">{this.$t('about.title')}</h1>
          {/**
           * Two ways of creating links:
           * 1. Using i18n functional component for complex strings
           * 2. Using nested translations as values for HTML components
           */}
          <i18n-t keypath="moreInfo.text" scope="global" tag="p">
            <a href={this.$t('moreInfo.href')} target="_blank" rel="external">
              <code>{this.$t('moreInfo.label')}</code>
            </a>
          </i18n-t>
          <p class="links">
            <a class="link" href={this.$t('viteDocs.href')} target="_blank">
              {this.$t('viteDocs.label')}
            </a>
            <a class="link" href={this.$t('vueDocs.href')} target="_blank">
              {this.$t('vueDocs.label')}
            </a>
          </p>
        </MainContent>
        <MainFooter />
      </>
    );
  },
});
