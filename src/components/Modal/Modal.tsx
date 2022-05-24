import type { VNode } from 'vue';
import { defineComponent } from 'vue';
import './Modal.css';
import Button from '@/components/Button';

export default defineComponent({
  name: 'Modal',
  props: {
    modalClose: {
      default: false,
      type: Boolean,
    },
    title: {
      default: '',
      type: String,
    },
  },
  render(): VNode {
    return (
      <aside tabindex="-1" class="modal-dialog">
        <div class="modal-wrapper">
          <div class="modal-header">
            <Button type="button">
              <svg
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </Button>
          </div>
          <div class="modal-body">
            <h2 class="font-semibold pb-8">{this.title}</h2>
            {this.$slots.default ? this.$slots.default() : null}
          </div>
        </div>
      </aside>
    );
  },
});
