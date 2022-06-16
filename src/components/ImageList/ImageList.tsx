import type { LocationImage } from '@/types';
import type { PropType, VNode } from 'vue';
import { defineComponent } from 'vue';
import './ImageList.css';

export default defineComponent({
  name: 'ImageList',
  props: {
    images: {
      default: () => [],
      type: Array as PropType<LocationImage[]>,
    },
  },
  render(): VNode {
    return (
      <ul aria-labelledby="image-list-title" class="image-list">
        {this.images.map(({ alt, caption, src }) => (
          <li class="item">
            <figure class="container">
              <img alt={this.$t(alt)} class="image" src={src} />
              {caption && (
                <figcaption class="caption">{this.$t(caption)}</figcaption>
              )}
            </figure>
          </li>
        ))}
      </ul>
    );
  },
});
