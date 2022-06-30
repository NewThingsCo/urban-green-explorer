import type { VNode } from 'vue';
import { defineComponent } from 'vue';
import { RouterLink } from 'vue-router';
import HeroBackground from '@/assets/images/cover-images/sompasaari-overview.jpg?url';
import BGLogo from '@/assets/logos/b-green.svg?component';
import InterregLogo from '@/assets/logos/central-baltic-programme-logo.svg?component';
import EULogo from '@/assets/logos/eu.svg?component';
import ForumVirium from '@/assets/logos/forum-virium.svg?component';
import HelsinkiLogo from '@/assets/logos/helsinki.svg?component';
import SeiLogo from '@/assets/logos/sei.svg?component';
import TallinnLogo from '@/assets/logos/tallinna-strateegiakeskus.svg?component';
import AppFooter from '@/components/AppFooter';
import AppHeader from '@/components/AppHeader';
import AppMain from '@/components/AppMain';
import Button from '@/components/Button';
import Hero from '@/components/Hero';
import './IndexPage.css';

export default defineComponent({
  name: 'IndexPage',
  render(): VNode {
    return (
      <>
        <AppHeader />
        <AppMain class="main-index">
          <Hero style={{ backgroundImage: `url(${HeroBackground})` }}>
            <h1 class="title">{this.$t('introduction.title')}</h1>
            <div class="content" v-html={this.$t('introduction.content')} />
            <Button
              class="button button-primary"
              to={{ name: 'locations' }}
              type="router-link"
            >
              {this.$t('introduction.buttonText')}
            </Button>
          </Hero>
          <div class="logos">
            <BGLogo class="logo" />
            <InterregLogo class="logo" />
            <EULogo class="logo" />
            <ForumVirium class="logo" />
            <HelsinkiLogo class="logo" />
            <SeiLogo class="logo" />
            <TallinnLogo class="logo" />
          </div>
          <p class="copyright">&copy; 2022 B.Green project</p>
          <p class="additional-links">
            <RouterLink
              to={{ name: 'terms-of-use', params: { from: 'index' } }}
            >
              {this.$t('termsOfUse')}
            </RouterLink>
          </p>
        </AppMain>
        <AppFooter />
      </>
    );
  },
});
