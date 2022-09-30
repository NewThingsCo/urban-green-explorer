import type { PropType, VNode } from 'vue';
import { defineComponent } from 'vue';
import AngryIcon from '@/assets/icons/angry.svg?component';
import FrownIcon from '@/assets/icons/frown.svg?component';
import GrinIcon from '@/assets/icons/grin.svg?component';
import MehIcon from '@/assets/icons/meh.svg?component';
import SmileIcon from '@/assets/icons/smile.svg?component';
import './RatingEmojis.css';

export default defineComponent({
  name: 'RatingEmojis',
  props: {
    fieldsetTitle: {
      default: undefined,
      type: String,
    },
    legendText: {
      default: undefined,
      type: String,
    },
    onInvalid: {
      default: undefined,
      type: Function as PropType<(event: Event) => void>,
    },
    required: {
      default: false,
      type: Boolean,
    },
  },
  render(): VNode {
    return (
      <fieldset
        class="rating"
        onInvalid={this.onInvalid}
        title={this.$t('rating')}
      >
        {this.legendText && <legend class="legend">{this.legendText}</legend>}
        <ul class="flex feedback-options justify-center">
          <li>
            <label class="label">
              <input
                class="hidden-radio"
                name="rating"
                required={this.required}
                type="radio"
                value="1"
              />
              <AngryIcon class="icon" />
            </label>
          </li>
          <li>
            <label class="label">
              <input
                class="hidden-radio"
                name="rating"
                required={this.required}
                type="radio"
                value="2"
              />
              <FrownIcon class="icon" />
            </label>
          </li>
          <li>
            <label class="label">
              <input
                class="hidden-radio"
                name="rating"
                required={this.required}
                type="radio"
                value="3"
              />
              <MehIcon class="icon" />
            </label>
          </li>
          <li>
            <label class="label">
              <input
                class="hidden-radio"
                name="rating"
                required={this.required}
                type="radio"
                value="4"
              />
              <SmileIcon class="icon" />
            </label>
          </li>
          <li>
            <label class="label">
              <input
                class="hidden-radio"
                name="rating"
                required={this.required}
                type="radio"
                value="5"
              />
              <GrinIcon class="icon" />
            </label>
          </li>
        </ul>
      </fieldset>
    );
  },
});
