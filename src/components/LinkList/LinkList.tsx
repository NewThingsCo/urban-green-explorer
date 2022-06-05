import type { LocationLink } from '@/types';
import { defineComponent, PropType, VNode } from 'vue';
import { RouterLink } from 'vue-router';
import './LinkList.css';

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
  render(): VNode {
    return (
      <>
        {this.links.length && (
          <ul aria-label={this.$t('locationLinks')} class="link-list">
            {this.links.map(
              ({
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
                          href={to.name?.toString()}
                          rel="external"
                          target="_blank"
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
                          <span class="link-title">{this.$t(title)}</span>
                          {IconRight && <IconRight class="icon icon-right" />}
                        </a>
                      </li>
                    );
                  default:
                    return null;
                }
              }
            )}
          </ul>
        )}
      </>
    );
  },
});
