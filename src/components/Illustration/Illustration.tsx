import { computed, defineComponent, VNode } from 'vue';
import InfoIllustrationUrl from '@/assets/images/backgrounds/060520.png?url';
import DefaultIllustrationUrl from '@/assets/images/backgrounds/infra.png?url';

export default defineComponent({
  name: 'Illustration',
  props: {
    name: {
      default: DefaultIllustrationUrl,
      type: String,
    },
  },
  setup(props) {
    const src = computed(() => {
      switch (props?.name) {
        case 'info':
          return InfoIllustrationUrl;
        default:
          return DefaultIllustrationUrl;
      }
    });
    return { src };
  },
  render(): VNode {
    return <img alt="" class="illustration" src={this.src} />;
  },
});
