import type { Ref, VNode } from 'vue';
import { useSchemaOrg } from '@vueuse/schema-org';
import { defineComponent, KeepAlive, onMounted, ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import './App.css';
import { SCHEMA_ORG } from './constants';
import type { ColorScheme } from './types';

export default defineComponent({
  name: 'App',
  setup() {
    const { locale } = useI18n();

    /** Keeps track of our current color scheme. */
    const colorScheme: Ref<ColorScheme | null> = ref(null);
    const $html: Ref<HTMLElement | null> = ref(null);

    /** Changes the color scheme class in the HTML element. */
    function changeDocumentColorSchemeClass(scheme: ColorScheme | null): void {
      if (!$html.value || !scheme) {
        throw new Error(
          'Attempting to update theme without a document element present in window.'
        );
      }
      console.debug('Updating document theme to:', scheme);
      switch (scheme) {
        case 'dark':
          $html.value.classList.remove('light');
          $html.value.classList.add('dark');
          break;
        default:
          $html.value.classList.remove('dark');
          $html.value.classList.add('light');
          break;
      }
    }

    /** Handles color scheme changes. */
    function handleMediaQueryChange(event: MediaQueryListEvent): void {
      console.debug('Color scheme changed:', event);
      setColorScheme(event.matches ? 'dark' : 'light');
    }

    /** Sets the current color scheme to `dark` or `light`. */
    function setColorScheme(scheme: ColorScheme): void {
      console.debug('Changing color scheme to:', scheme);
      colorScheme.value = 'dark' === scheme ? 'dark' : 'light';
    }

    /** Initializes application. */
    function initializeApp(): void {
      $html.value = window.document.documentElement;

      if (!$html.value) {
        throw new Error(
          'Window document element not found. Aborting initialization.'
        );
      }

      // Set correct locale to document
      $html.value.setAttribute('lang', locale.value);

      /** Initial color scheme. */
      const initialColorScheme: ColorScheme =
        window &&
        window?.matchMedia &&
        window?.matchMedia('(prefers-color-scheme: dark)')?.matches
          ? 'dark'
          : 'light';
      console.debug('Initial color scheme:', initialColorScheme);

      // Set the initial color scheme
      setColorScheme(initialColorScheme);

      // Platform classes
      switch (true) {
        case !!window.navigator.userAgent.match(/iPhone|iPod|iPad/):
          $html.value.classList.add('ios');
          break;
      }

      // Watch for media query changes
      window
        ?.matchMedia('(prefers-color-scheme: dark)')
        ?.addEventListener('change', handleMediaQueryChange);
    }

    onMounted(initializeApp);
    useSchemaOrg(SCHEMA_ORG);
    watch(colorScheme, changeDocumentColorSchemeClass);
  },
  render(): VNode {
    return (
      <KeepAlive>
        <router-view />
      </KeepAlive>
    );
  },
});
