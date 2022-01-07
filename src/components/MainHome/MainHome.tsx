import type { VNode } from 'vue';
import { defineComponent } from 'vue';
import Counter from '@/components/Counter';
import './MainHome.css';

export default defineComponent({
  name: 'MainHome',
  render(): VNode {
    return (
      <main class="main main-home">
        <h1 class="title">{this.$t('title')}</h1>
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
        <p>{this.$n(100.2, 'currency')}</p>
        <p>{this.$n(100.2, 'currencyNoCents')}</p>
        <h2 class="mt-6 title">{this.$t('dateTimes')}</h2>
        <p>
          {this.$d(new Date())} | {this.$d(new Date(), 'long')}
        </p>
      </main>
    );
  },
});
