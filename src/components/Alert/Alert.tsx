import type { VNode } from 'vue';
import { defineComponent } from 'vue';
import CrossCircleIcon from '@/assets/icons/cross-circle.svg?component';
import './Alert.css';

export default defineComponent({
  name: 'Alert',
  render(): VNode {
    return (
      <aside class="alert-wrapper">
        <div class="alert alert-error" role="alert">
          <CrossCircleIcon class="h-8 w-8" />
          {this.$slots.default && (
            <div class="label">{this.$slots.default()}</div>
          )}
        </div>
      </aside>
    );
  },
});
