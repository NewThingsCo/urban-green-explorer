import { defineComponent } from 'vue';
import Counter from '@/components/Counter';
import AppFooter from '@/components/AppFooter';
import AppHeader from '@/components/AppHeader';
import AppMain from '@/components/AppMain';

export default defineComponent({
  name: 'IndexPage',
  render() {
    return (
      <>
        <AppHeader />
        <AppMain class="main-wrapper">
          <h1 class="title page-title">{this.$t('title')}</h1>
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
          <h2 class="mt-6 title">{this.$t('counter')}</h2>
          <Counter />
          <h2 class="mt-6 title">{this.$t('currencies')}</h2>
          <div class="currency-examples">
            <dl>
              <dt>{this.$t('currency')}</dt>
              <dd>{this.$n(100.27, 'currency')}</dd>
            </dl>
            <dl>
              <dt>{this.$t('currencyWithoutCents')}</dt>
              <dd>{this.$n(100.2, 'currencyNoCents')}</dd>
            </dl>
          </div>
          <h2 class="mt-6 title">{this.$t('dateTimes')}</h2>
          <div class="datetime-examples">
            <dl>
              <dt>{this.$t('short')}</dt>
              <dd>{this.$d(new Date())}</dd>
            </dl>
            <dl>
              <dt>{this.$t('long')}</dt>
              <dd>{this.$d(new Date(), 'long')}</dd>
            </dl>
          </div>
        </AppMain>
        <AppFooter>
          <i18n-t
            class="text"
            keypath="editComponent.text"
            scope="global"
            tag="p"
          >
            <a
              href={this.$t('editComponent.href')}
              target="_blank"
              rel="external"
            >
              <code>{this.$t('editComponent.label')}</code>
            </a>
          </i18n-t>
        </AppFooter>
      </>
    );
  },
});
