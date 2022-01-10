import type { VNode } from 'vue';
import { defineComponent } from 'vue';
import CoverImage from '../CoverImage';
import LocaleSwitcher from '../LocaleSwitcher';
import Navigation from '../Navigation';
import CoverImageSrc from '@/assets/cover-image.webp';
import './MainHeader.css';

export default defineComponent({
  name: 'MainHeader',
  render(): VNode {
    return (
      <header class="main-header">
        <CoverImage alt={this.$t('coverImage')} src={CoverImageSrc} />
        <LocaleSwitcher />
        <Navigation />
      </header>
    );
  },
});
