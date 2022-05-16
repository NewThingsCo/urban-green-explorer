import { router } from '@/router';

export function handleMapLink(event: Event): void {
  event.preventDefault();
  const { href } = event.target as HTMLAnchorElement;
  router.push(href);
}
