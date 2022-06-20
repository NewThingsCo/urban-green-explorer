import type { ComputedRef, VNode } from 'vue';
import { computed, defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';
import useTheme from '@/stores/theme';
import Button from '@/components/Button';
import SunIcon from '@/assets/icons/sun-solid.svg?component';
import MoonIcon from '@/assets/icons/moon-solid.svg?component';

export default defineComponent({
  name: 'ThemeSwitcher',
  setup() {
    const { t } = useI18n();
    const theme = useTheme();

    const buttonTitle: ComputedRef<string> = computed(() => {
      switch (theme.colorScheme) {
        case 'dark':
          return t('switchToLightTheme').toString();
        default:
          return t('switchToDarkTheme').toString();
      }
    });

    const Icon: ComputedRef<VNode> = computed(() => {
      switch (theme.colorScheme) {
        case 'dark':
          return <SunIcon class="icon" />;
        default:
          return <MoonIcon class="icon" />;
      }
    });

    function handleThemeChange(): void {
      switch (theme.colorScheme) {
        case 'dark':
          theme.colorScheme = 'light';
          break;
        default:
          theme.colorScheme = 'dark';
      }
    }

    return {
      buttonTitle,
      Icon,
      handleThemeChange,
      theme,
    };
  },
  render(): VNode {
    return (
      <Button onClick={this.handleThemeChange} title={this.buttonTitle}>
        {this.Icon}
      </Button>
    );
  },
});
