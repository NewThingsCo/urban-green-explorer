import type { PropType, VNode } from 'vue';
import { defineComponent } from 'vue';
import LocaleSwitcher from '../LocaleSwitcher';
import '../AppHeader/AppHeader.css';
import ChevronLeft from '@/assets/icons/chevron-left.svg?component';
import Button from '@/components/Button';
import { defaultEventHandler } from '@/utils';
import { goBack } from '@/router';

export default defineComponent({
  name: 'GoBackHeader',
  props: {
    onClick: {
      default: defaultEventHandler,
      type: Function as PropType<(event?: Event) => void>,
    },
  },
  setup() {
    return {
      goBack,
    };
  },
  render(): VNode {
    return (
      <header class="app-header">
        <Button
          class="my-5 text-black bg-white border-none font-semibold cursor-pointer hover:bg-white"
          onClick={this.goBack}
          type="submit"
        >
          <ChevronLeft class="w-3 h-3 mr-1" />
          {this.$t('back')}
        </Button>
        <LocaleSwitcher />
      </header>
    );
  },
});
