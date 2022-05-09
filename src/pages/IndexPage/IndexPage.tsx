import { defineComponent } from 'vue';
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
            <div class="logos index-wrapper">
              {/* TODO: Fix logos */}
              <img
                class="w-40 h-20"
                src="https://bgreen-project.eu/wp-content/uploads/2021/05/sei-logo.png"
              />
              <img
                class="w-40 h-15"
                src="https://bgreen-project.eu/wp-content/uploads/2021/05/tallinna-strateegiakeskus-logo-sinine@2x.png"
              />
              <img
                class="w-23 h-11"
                src="https://bgreen-project.eu/wp-content/uploads/2021/06/helsinki_tunnus.png"
              />
              <img
                class="w-20 h-9"
                src="https://bgreen-project.eu/wp-content/uploads/2021/05/FVH_logo_PMS021_thumb.png"
              />
              <img
                class="w-25 h-10"
                src="https://bgreen-project.eu/wp-content/uploads/2021/05/European_Union_Regional_Development_Fund_landscape.jpg"
              />
              <img
                class="w-22 h-11"
                src="https://bgreen-project.eu/wp-content/uploads/2021/05/Interreg_Central_Baltic.jpg"
              />
            </div>
            <span class="text-sm text-gray-400">© 2022 B.Green project</span>
          </div>
        </AppMain>
        <AppFooter />
      </>
    );
  },
});
