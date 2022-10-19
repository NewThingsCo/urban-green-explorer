import type { VNode } from 'vue';
import { defineComponent, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import { useSchemaOrg } from '#vueuse/schema-org/runtime';
import './App.css';
import { GLOBAL_SCHEMA_ORG } from '@/constants';

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
    useSchemaOrg(GLOBAL_SCHEMA_ORG);
  },
  render(): VNode {
    return <router-view />;
  },
});
