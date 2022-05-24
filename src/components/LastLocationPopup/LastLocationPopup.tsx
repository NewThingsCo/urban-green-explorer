import type { VNode, PropType } from 'vue';
import { defineComponent } from 'vue';
import ChevronRight from '@/assets/icons/chevron-right.svg?component';
import Modal from '@/components/Modal';

export default defineComponent({
  name: 'LastLocationPopup',
  props: {
    onClose: {
      required: true,
      type: Function as PropType<(event: Event) => void>,
    },
  },
  render(): VNode {
    return (
      <Modal onClose={this.onClose} title={this.$t('completed.title')}>
        <p class="text-2xl">{this.$t('completed.p1')}</p>
        <p class="text-2xl">{this.$t('completed.p2')}</p>
        <div class="flex items-center text-center justify-center">
          <p class="text-2xl">{this.$t('completed.feedback')}</p>{' '}
          <ChevronRight class="w-5" />
        </div>
      </Modal>
    );
  },
});
