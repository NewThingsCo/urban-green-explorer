import { defineComponent } from 'vue';
import BGLogo from '@/assets/logos/bglogo.png';
import EuLogo from '@/assets/logos/eu.png';
import TallinnLogo from '@/assets/logos/tallinn.png';
import SeiLogo from '@/assets/logos/sei.png';
import HelsinkiLogo from '@/assets/logos/helsinki.png';
import InterregLogo from '@/assets/logos/interreg.png';
import AppFooter from '@/components/AppFooter';
import AppHeader from '@/components/AppHeader';
import AppMain from '@/components/AppMain';
import Hero from '@/components/Hero';
import './Index.css';

export default defineComponent({
  name: 'IndexPage',
  setup() {
    const bgLogo = new URL(BGLogo, import.meta.url).href;
    const tallinnLogo = new URL(TallinnLogo, import.meta.url).href;
    const helsinkiLogo = new URL(HelsinkiLogo, import.meta.url).href;
    const seiLogo = new URL(SeiLogo, import.meta.url).href;
    const euLogo = new URL(EuLogo, import.meta.url).href;
    const interregLogo = new URL(InterregLogo, import.meta.url).href;
    return {
      bgLogo,
      tallinnLogo,
      helsinkiLogo,
      seiLogo,
      euLogo,
      interregLogo,
    };
  },
  render() {
    return (
      <>
        <AppHeader />
        <AppMain class="main-wrapper">
          <Hero />
          <div class="index-wrapper">
            <div class="logos">
              <img class="h-1/2" src={this.seiLogo} />
              <img class="h-1/2" src={this.tallinnLogo} />
              <img class="h-1/2" src={this.bgLogo} />
              <img class="h-1/2" src={this.helsinkiLogo} />
              <img class="h-1/2" src={this.euLogo} />
              <img class="h-1/2" src={this.interregLogo} />
            </div>
            <span class="text-sm text-gray-400">© 2022 B.Green project</span>
          </div>
        </AppMain>
        <AppFooter />
      </>
    );
  },
});
