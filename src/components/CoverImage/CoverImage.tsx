import type { VNode } from 'vue';
import { defineComponent } from 'vue';
import './CoverImage.css';

export default defineComponent({
  name: 'CoverImage',
  props: {
    alt: {
      default: '',
      required: false,
      type: String,
    },
    src: {
      required: true,
      type: String,
    },
  },
  render(): VNode {
    return (
      <figure class="cover-image">
        <img alt={this.alt} class="cover-image" src={this.src} />
      </figure>
    );
  },
});
