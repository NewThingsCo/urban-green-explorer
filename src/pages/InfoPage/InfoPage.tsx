import type { LocationLink } from '@/types';
import type { VNode } from 'vue';
import { computed, defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';
import ChevronRight from '@/assets/icons/chevron-right.svg?component';
import CommentIcon from '@/assets/icons/comment.svg?component';
import UserLockIcon from '@/assets/icons/user-lock.svg?component';
import AppFooter from '@/components/AppFooter';
import AppHeader from '@/components/AppHeader';
import AppMain from '@/components/AppMain';
import Illustration from '@/components/Illustration';
import LinkList from '@/components/LinkList';
import './InfoPage.css';

export default defineComponent({
  name: 'InfoPage',
  setup() {
    const { t } = useI18n();
    const links = computed<LocationLink[]>(() => [
      {
        alert: '',
        iconLeft: CommentIcon,
        iconRight: ChevronRight,
        title: t('feedback'),
        to: { name: 'feedback', params: { from: 'info' } },
        type: 'router-link',
      },
      {
        alert: '',
        iconLeft: UserLockIcon,
        iconRight: ChevronRight,
        title: t('termsOfUse'),
        to: { name: 'terms-of-use', params: { from: 'info' } },
        type: 'router-link',
      },
    ]);
    return { links };
  },
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
            <dd>
              <a href="https://forumvirium.fi/" rel="external" target="_blank">
                https://forumvirium.fi/
              </a>
            </dd>
          </dl>
          <dl class="list">
            <dt class="list-title">{this.$t('financier')}</dt>
            <dd>European Union, Central Baltic Interreg program</dd>
            <dd>
              <a
                href="https://centralbaltic.eu/"
                rel="external"
                target="_blank"
              >
                https://centralbaltic.eu/
              </a>
            </dd>
          </dl>
          <dl class="list">
            <dt class="list-title">{this.$t('bGreenContact')}</dt>
            <dd>
              <a
                href="https://bgreen-project.eu/contact/"
                rel="help"
                target="_blank"
              >
                https://bgreen-project.eu/contact/
              </a>
            </dd>
          </dl>
          <dl class="list">
            <dt class="list-title">{this.$t('implementation')}</dt>
            <dd>
              New Things Company Oy
              <br />
              <a href="https://newthings.co" rel="external" target="_blank">
                https://newthings.co
              </a>
            </dd>
          </dl>
          <hr class="my-6" />
          {this.links.length ? <LinkList links={this.links} /> : null}
        </AppMain>
        <Illustration name="info" />
        <AppFooter />
      </>
    );
  },
});
