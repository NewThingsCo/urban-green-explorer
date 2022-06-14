import type { VNode } from 'vue';
import { defineComponent } from 'vue';
import HeroBackground from '@/assets/images/Sompasaari-overview.jpg?url';
import BGLogo from '@/assets/logos/bglogo.png?url';
import EULogo from '@/assets/logos/eu.png?url';
import HelsinkiLogo from '@/assets/logos/helsinki.png?url';
import InterregLogo from '@/assets/logos/interreg.png?url';
import SeiLogo from '@/assets/logos/sei.png?url';
import TallinnLogo from '@/assets/logos/tallinn.png?url';
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
        <AppMain>
          <Hero style={{ backgroundImage: `url(${HeroBackground})` }}>
            <h1 class="title">{this.$t('introduction.helloThere')}</h1>
            <p>{this.$t('introduction.bodyText')}</p>
            <Button
              class="button button-primary"
              to={{ name: 'locations' }}
              type="router-link"
            >
              {this.$t('introduction.getStarted')}
            </Button>
          </Hero>
          <div class="logos">
            <img class="logo" src={SeiLogo} />
            <img class="logo" src={TallinnLogo} />
            <img class="logo" src={BGLogo} />
            <img class="logo" src={HelsinkiLogo} />
            <img class="logo" src={EULogo} />
            <img class="logo" src={InterregLogo} />
          </div>
          <p class="copyright">&copy; 2022 B.Green project</p>
        </AppMain>
        <AppFooter />
      </>
    );
  },
});
