import type { PropType, VNode } from 'vue';
import type { Location } from '@/types';
import { defineComponent } from 'vue';
import './CategoryList.css';

export default defineComponent({
  name: 'CategoryList',
  props: {
    categories: {
      default: () => [],
      type: Array as PropType<Location['categories']>,
    },
  },
  render(): VNode {
    return (
      <>
        {this.categories.length && (
          <ul aria-label={this.$t('categories')} class="category-list">
            {this.categories.map((key) => (
              <li class="category">{this.$t(`category.${key}`)}</li>
            ))}
          </ul>
        )}
      </>
    );
  },
});
