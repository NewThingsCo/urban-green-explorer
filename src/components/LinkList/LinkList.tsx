import type { PropType, VNode } from 'vue';
import type { LocationLink } from '@/types';
import { defineComponent } from 'vue';
import { RouterLink } from 'vue-router';
import './LinkList.css';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  name: 'LinkList',
  props: {
    links: {
      default: () => [],
      type: Array as PropType<LocationLink[]>,
    },
    /** @todo Implement panel logic */
    showPanel: {
      default: (event: MouseEvent): void => {
        event.preventDefault();
        const $link = event.target as HTMLAnchorElement;
        const id = $link.dataset.id;
        alert(`Panel not implemented for '${id}'`);
      },
      type: Function as PropType<(event: MouseEvent) => void>,
    },
  },
  setup() {
    const { t } = useI18n();

    /** Generates a link's `href` value based on the correct type. */
    function generateHrefValue(to: LocationLink['to']): string {
      switch (true) {
        // Translation
        case 'string' === typeof to && to.startsWith('locations.'):
          return t(to);
        // Regular link
        case 'string' === to:
          return to;
        // Router object
        default:
          return to.path?.toString();
      }
    }

    /** Handles alerts from links. */
    function handleAlert(event: Event, alert?: string): void {
      if (!alert) return;
      event.preventDefault();
      window.alert(t(alert).toString());
    }

    return { generateHrefValue, handleAlert };
  },
  render(): VNode {
    return (
      <ul aria-label={this.$t('locationLinks')} class="link-list">
        {this.links.map(
          ({
            alert,
            iconLeft: IconLeft,
            iconRight: IconRight,
            title,
            to,
            type,
          }) => {
            switch (type) {
              case 'external':
                return (
                  <li class="item">
                    <a
                      class="link"
                      href={this.generateHrefValue(to)}
                      onClick={(event) => this.handleAlert(event, alert)}
                      rel="external"
                      target="_blank"
                    >
                      {IconLeft && <IconLeft class="icon icon-left" />}
                      <span class="title">{this.$t(title)}</span>
                      {IconRight && <IconRight class="icon icon-right" />}
                    </a>
                  </li>
                );
              /** @todo */
              case 'panel':
                return (
                  <li class="item">
                    <a
                      class="link"
                      data-id={to.params?.id}
                      href={`#panel-${to.params?.id}`}
                      onClick={this.showPanel}
                    >
                      {IconLeft && <IconLeft class="icon icon-left" />}
                      <span class="title">{this.$t(title)}</span>
                      {IconRight && <IconRight class="icon icon-right" />}
                    </a>
                  </li>
                );
              case 'router-link':
                return (
                  <li class="item">
                    <RouterLink class="link" to={to}>
                      {IconLeft && <IconLeft class="icon icon-left" />}
                      <span class="title">{this.$t(title)}</span>
                      {IconRight && <IconRight class="icon icon-right" />}
                    </RouterLink>
                  </li>
                );
              default:
                return null;
            }
          }
        )}
      </ul>
    );
  },
});
