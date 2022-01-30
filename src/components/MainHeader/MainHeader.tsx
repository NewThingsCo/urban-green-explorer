import type { VNode } from 'vue';
import { defineComponent } from 'vue';
import CoverImageSrc from '~/assets/cover-image.webp';
import { routes } from '~/router/routes';
import CoverImage from '../CoverImage';
import LocaleSwitcher from '../LocaleSwitcher';
import Navigation from '../Navigation';
import './MainHeader.css';

export default defineComponent({
  name: 'MainHeader',
  render(): VNode {
    return (
      <header class="main-header">
        <CoverImage alt={this.$t('coverImage')} src={CoverImageSrc} />
        <LocaleSwitcher />
        <Navigation routes={routes} />
      </header>
    );
  },
});
