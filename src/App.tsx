import type { VNode } from 'vue';
import { useSchemaOrg } from '@vueuse/schema-org';
import { defineComponent, KeepAlive, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import './App.css';
import { SCHEMA_ORG } from './constants';

export default defineComponent({
  name: 'App',
  setup() {
    const { locale } = useI18n();

    /** Initializes the application. */
    function initializeApp() {
      // Set correct locale to document
      document?.documentElement?.setAttribute('lang', locale.value);

      // Platform classes
      switch (true) {
        case !!window.navigator.userAgent.match(/iPhone|iPod|iPad/):
          document.body.parentElement?.classList?.add('ios');
      }
    }
    onMounted(initializeApp);
    useSchemaOrg(SCHEMA_ORG);
  },
  render(): VNode {
    return (
      <KeepAlive>
        <router-view />
      </KeepAlive>
    );
  },
});
