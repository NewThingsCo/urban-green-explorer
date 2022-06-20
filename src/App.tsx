import type { ColorScheme } from '@/types';
import type { ComputedRef, Ref, VNode } from 'vue';
import { useSchemaOrg } from '@vueuse/schema-org';
import {
  computed,
  defineComponent,
  KeepAlive,
  onMounted,
  ref,
  watch,
} from 'vue';
import { useI18n } from 'vue-i18n';
import { useRoute } from 'vue-router';
import useTheme from '@/stores/theme';
import { SCHEMA_ORG } from '@/constants';
import './App.css';

export default defineComponent({
  name: 'App',
  setup() {
    const { locale } = useI18n();
    const route = useRoute();
    const theme = useTheme();

    /** Keeps track of our current color scheme. */
    const colorScheme: ComputedRef<ColorScheme | null> = computed(
      () => theme.colorScheme
    );

    /** Root HTML element of the app. */
    const $html: Ref<HTMLElement | null> = ref(null);

    /** Changes the color scheme class in the HTML element. */
    function handleColorSchemeChange(scheme: ColorScheme | null): void {
      if (!$html.value || !scheme) {
        throw new Error(
          'Attempting to update theme without a document element present in window.'
        );
      }
      console.debug('Updating document class to:', scheme);
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

    /** Sets the current theme's color scheme to `dark` or `light`. */
    function setColorScheme(scheme: ColorScheme): void {
      console.debug('Changing color scheme to:', scheme);
      theme.colorScheme = 'dark' === scheme ? 'dark' : 'light';
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

      // Add platform specific classes
      switch (true) {
        case Boolean(window.navigator.userAgent.match(/iPhone|iPod|iPad/)):
          $html.value.classList.add('ios');
          break;
        default:
          console.debug(
            'No additional class set for user agent:',
            window.navigator.userAgent
          );
      }

      // Watch for media query changes
      window
        ?.matchMedia('(prefers-color-scheme: dark)')
        ?.addEventListener('change', handleMediaQueryChange);
    }

    /** Handles route changes. */
    function handleRouteChange() {
      // Add current route for styling
      if ($html.value && route.name) {
        console.debug('Setting route name:', route.name);
        $html.value.dataset.route = route.name.toString();
      }
    }

    onMounted(initializeApp);
    useSchemaOrg(SCHEMA_ORG);
    watch(colorScheme, handleColorSchemeChange);
    watch(route, handleRouteChange);
  },
  render(): VNode {
    return (
      <KeepAlive>
        <router-view />
      </KeepAlive>
    );
  },
});
