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
        <AppMain class="main-info main-wrapper">
          <h1 class="title page-title">{this.$t('info.title')}</h1>
          <h2 class="page-subtitle">{this.$t('info.subtitle')}</h2>
          <dl class="list">
            <dt class="list-title">{this.$t('producer')}</dt>
            <dd>Forum Virium Helsinki</dd>
            <dd>B.Green-project, 2020-2022</dd>
          </dl>
          <dl class="list">
            <dt class="list-title">{this.$t('financier')}</dt>
            <dd>European Union, Central Baltic Interreg program</dd>
          </dl>
          <dl class="list">
            <dt class="list-title">{this.$t('bGreenContact')}</dt>
            <dd>
              <a href="https://bgreen-project.eu/contact/" target="_blank">
                https://bgreen-project.eu/contact/
              </a>
            </dd>
          </dl>
          <dl class="list">
            <dt class="list-title">{this.$t('implementation')}</dt>
            <dd>
              New Things Company Oy
              <br />
              <a href="https://newthings.co">https://newthings.co</a>
            </dd>
          </dl>
        </AppMain>
        <AppFooter />
      </>
    );
  },
});
