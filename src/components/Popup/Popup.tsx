import type { VNode } from 'vue';
import { defineComponent } from 'vue';
import ChevronRight from '@/assets/icons/chevron-right.svg?component';
import './Popup.css';

export default defineComponent({
  name: 'Popup',
  render(): VNode {
    return (
      <div tabindex="-1" aria-hidden="true" class="modal-dialog">
        <div class="modal-wrapper">
          <div class="modal-header">
            <button type="button">
              <svg
                class="w-5 h-5"
                fill="black"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div class="modal-body">
            <h2 class="modal-title">Congrats!</h2>
            <p class="modal-text">You've completed all the locations.</p>
            <p class="modal-text">Hope you enjoyed the tour!</p>
            <p class="modal-text">
              Feedback form? <ChevronRight class="w-5" />
            </p>
          </div>
        </div>
      </div>
    );
  },
});
