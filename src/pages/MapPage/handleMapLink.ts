import { router } from '@/router';

/** Redirects users to the `href` value of links inside popups on the map. */
export function handleMapLink(event: Event): void {
  event.preventDefault();
  const { href } = event.target as HTMLAnchorElement;
  router.push(href);
}
