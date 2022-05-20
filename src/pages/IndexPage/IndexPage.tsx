import { defineComponent } from 'vue';
import BGLogo from '@/assets/logos/bglogo.png?url';
import EULogo from '@/assets/logos/eu.png?url';
import TallinnLogo from '@/assets/logos/tallinn.png?url';
import SeiLogo from '@/assets/logos/sei.png?url';
import HelsinkiLogo from '@/assets/logos/helsinki.png?url';
import InterregLogo from '@/assets/logos/interreg.png?url';
import AppFooter from '@/components/AppFooter';
import AppHeader from '@/components/AppHeader';
import AppMain from '@/components/AppMain';
import Hero from '@/components/Hero';
import './Index.css';

export default defineComponent({
  name: 'IndexPage',
  render() {
    return (
      <>
        <AppHeader />
        <AppMain class="main-wrapper">
          <Hero />
          <div class="index-wrapper">
            <div class="logos">
              <img class="h-1/2" src={SeiLogo} />
              <img class="h-1/2" src={TallinnLogo} />
              <img class="h-1/2" src={BGLogo} />
              <img class="h-1/2" src={HelsinkiLogo} />
              <img class="h-1/2" src={EULogo} />
              <img class="h-1/2" src={InterregLogo} />
            </div>
            <span class="text-sm text-gray-400">© 2022 B.Green project</span>
          </div>
        </AppMain>
        <AppFooter />
      </>
    );
  },
});
