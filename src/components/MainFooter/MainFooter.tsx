import type { VNode } from 'vue';
import { defineComponent } from 'vue';
import './MainFooter.css';

export default defineComponent({
  name: 'MainFooter',
  render(): VNode {
    return (
      <footer class="main-footer">
        <hr class="my-6" />
        <i18n-t
          class="text"
          keypath="editComponent.text"
          scope="global"
          tag="p"
        >
          <a
            href={this.$t('editComponent.href')}
            target="_blank"
            rel="external"
          >
            <code>{this.$t('editComponent.label')}</code>
          </a>
        </i18n-t>
      </footer>
    );
  },
});