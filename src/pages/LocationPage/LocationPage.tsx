import type { CategoryKey, CheckIn, Location, LocationLink } from '@/types';
import type { ComputedRef, VNode } from 'vue';
import { computed, defineComponent, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRoute } from 'vue-router';
import AppFooter from '@/components/AppFooter';
import AppHeader from '@/components/AppHeader';
import AppMain from '@/components/AppMain';
import CategoryList from '@/components/CategoryList';
import CheckInComponent, { getCheckIn } from '@/components/CheckIn';
import LinkList from '@/components/LinkList';
import ImageList from '@/components/ImageList';
import { locations } from '@/content/locations';
import './LocationPage.css';

export default defineComponent({
  name: 'LocationPage',
  setup() {
    const route = useRoute();
    const { t } = useI18n();

    /** Slug of the current route. */
    const routeSlug: string = route.params.id?.toString() || '';

    /** Current location. */
    const currentLocation: Location | null =
      locations.find((l) => l.slug === routeSlug) || null;

    console.debug('Current locaxtion', currentLocation);

    if (!currentLocation)
      throw new Error(`No location found for slug: ${routeSlug}`);

    /** Index number of current location. */
    const locationIndex: ComputedRef<number> = computed(() =>
      locations.findIndex(
        (location) => location.title === currentLocation.title
      )
    );

    /** Additional content to be displayed after the user has checked-in. */
    const additionalContent: ComputedRef<string> = computed(() =>
      existingCheckIn.value && currentLocation.additionalContent
        ? t(currentLocation.additionalContent)
        : ''
    );

    /** Location categories. */
    const categories: ComputedRef<CategoryKey[]> = computed(
      () => currentLocation.categories || []
    );

    /** Location description. */
    const description: ComputedRef<string> = computed(
      () =>
        (currentLocation.description && t(currentLocation.description)) || ''
    );

    /** Existing check-in. */
    const existingCheckIn = ref<CheckIn | null>(
      getCheckIn(currentLocation.slug) || null
    );

    /** Location links including additional links if user has checked-in. */
    const links: ComputedRef<LocationLink[]> = computed(() =>
      existingCheckIn.value &&
      currentLocation?.links &&
      currentLocation?.additionalLinks
        ? [...currentLocation.links, ...currentLocation.additionalLinks]
        : currentLocation?.links || []
    );

    /** Location image. */
    const image = currentLocation.image;

    const images = computed(
      () => (existingCheckIn.value && currentLocation.images) || null
    );

    /** Location subtitle. */
    const subtitle = computed(() =>
      currentLocation.subtitle ? t(currentLocation.subtitle) : null
    );

    /** Location title. */
    const title = computed(() =>
      currentLocation.title
        ? `${locationIndex.value + 1}. ${t(currentLocation.title)}`
        : null
    );

    /** Handles check-in event from CheckIn component. */
    function handleCheckIn(checkIn: CheckIn): void {
      if (!checkIn) return;
      existingCheckIn.value = checkIn;
    }

    return {
      additionalContent,
      categories,
      description,
      existingCheckIn,
      handleCheckIn,
      image,
      images,
      links,
      subtitle,
      title,
    };
  },
  render(): VNode {
    return (
      <>
        <AppHeader />
        <AppMain class="main-location">
          {this.title && (
            <div class="main-wrapper">
              <h1 class="page-title" v-html={this.title} />
            </div>
          )}
          {this.image && (
            <img
              alt={this.$t(this.title || '')}
              class="cover-image"
              src={this.image}
            />
          )}
          <div class="main-wrapper">
            <CategoryList categories={this.categories} />
            {this.subtitle && <h2 class="page-subtitle">{this.subtitle}</h2>}
            {this.description && (
              <p class="description">{this.$t(this.description)}</p>
            )}
            {this.additionalContent && (
              <div
                class="additional-content"
                v-html={this.$t(this.additionalContent)}
              />
            )}
            {this.links.length ? <LinkList links={this.links} /> : null}
            {this.images?.length ? (
              <>
                <h2 class="page-subtitle image-title" id="image-list-title">
                  {this.$t('locationImages')}
                </h2>
                <ImageList images={this.images} />
              </>
            ) : null}
          </div>
        </AppMain>
        <AppFooter>
          <CheckInComponent onCheckIn={this.handleCheckIn} />
        </AppFooter>
      </>
    );
  },
});
