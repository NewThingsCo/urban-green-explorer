import type { VNode } from 'vue';
import { defineComponent } from 'vue';
import ChevronRight from '@/assets/icons/chevron-right.svg?component';
import Modal from '@/components/Modal';

export default defineComponent({
  name: 'LastLocationPopup',
  render(): VNode {
    return (
      <Modal title={this.$t('completed.title')}>
        <p>{this.$t('completed.p1')}</p>
        <p>{this.$t('completed.p2')}</p>
        <div class="flex items-center text-center justify-center">
          <p>{this.$t('completed.feedback')}</p> <ChevronRight class="w-5" />
        </div>
      </Modal>
    );
  },
});
