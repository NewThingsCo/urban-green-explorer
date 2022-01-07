import type { VNode } from 'vue';
import { defineComponent } from 'vue';
import CoverImage from '../CoverImage';
import './MainHeader.css';
import LocaleSwitcher from '../LocaleSwitcher';
import CoverImageSrc from '@/assets/cover-image.webp';

export default defineComponent({
  name: 'MainHeader',
  render(): VNode {
    return (
      <header class="main-header">
        <CoverImage alt={this.$t('coverImage')} src={CoverImageSrc} />
        <LocaleSwitcher />
      </header>
    );
  },
});
