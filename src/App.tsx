import type { VNode } from 'vue';
import { defineComponent, KeepAlive, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import './App.css';

export default defineComponent({
  name: 'App',
  setup() {
    const { locale } = useI18n();

    onMounted(() => {
      // Set correct locale to document
      document?.documentElement?.setAttribute('lang', locale.value);

      // Platform classes
      switch (true) {
        case !!window.navigator.userAgent.match(/iPhone|iPod|iPad/):
          document.body.parentElement?.classList?.add('ios');
      }
    });
  },
  render(): VNode {
    return (
      <KeepAlive>
        <router-view />
      </KeepAlive>
    );
  },
});
