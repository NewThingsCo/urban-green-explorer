import type { VNode } from 'vue';
import { computed, defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRoute } from 'vue-router';
import AppFooter from '@/components/AppFooter';
import AppHeader from '@/components/AppHeader';
import AppMain from '@/components/AppMain';
import CategoryList from '@/components/CategoryList';
import CheckIn from '@/components/CheckIn';
import LinkList from '@/components/LinkList';
import { locations } from '@/content/locations';
import './LocationPage.css';

export default defineComponent({
  name: 'LocationPage',
  setup() {
    const route = useRoute();
    const { t } = useI18n();
    const location =
      locations.find((l) => l.slug === route.params.id?.toString()) || null;
    const categories = computed(() => location?.categories || []);
    const description = computed(() =>
      location?.description ? t(location?.description) : null
    );
    const links = computed(() => location?.links || []);
    const image = computed(() => location?.image || null);
    const subtitle = computed(() =>
      location?.subtitle ? t(location.subtitle) : null
    );
    const title = computed(() => (location?.title ? t(location.title) : null));
    return { categories, description, image, links, location, subtitle, title };
  },
  render(): VNode {
    return (
      <>
        <AppHeader />
        <AppMain>
          {this.title && (
            <div class="main-wrapper">
              <h1 class="page-title" v-html={this.title} />
            </div>
          )}
          {this.image && (
            <img
              alt={this.$t(this.title || '')}
              class="image"
              src={this.image}
            />
          )}
          <div class="main-wrapper">
            <CategoryList categories={this.categories} />
            {this.subtitle && <h2 class="page-subtitle">{this.subtitle}</h2>}
            {this.description && (
              <p class="description">{this.$t(this.description)}</p>
            )}
            <LinkList links={this.links} />
          </div>
        </AppMain>
        <AppFooter>
          <CheckIn />
        </AppFooter>
      </>
    );
  },
});
