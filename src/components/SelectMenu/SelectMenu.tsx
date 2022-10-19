import type { PropType, VNode } from 'vue';
import { defineComponent } from 'vue';
import './SelectMenu.css';

export default defineComponent({
  name: 'SelectMenu',
  props: {
    selectName: {
      default: undefined,
      type: String,
    },
    selectOptions: {
      default: null,
      type: Object as PropType<Record<string, string>>,
    },
  },
  render(): VNode {
    return (
      <select class="select-menu" name={this.selectName}>
        <option value="">{this.$t('selectSubject')}</option>
        {this.selectOptions &&
          Object.keys(this.selectOptions).map((key) => (
            <option value={key}>{this.selectOptions[key]}</option>
          ))}
      </select>
    );
  },
});
