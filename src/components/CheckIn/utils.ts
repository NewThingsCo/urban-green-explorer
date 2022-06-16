import type { CheckIn, Location } from '@/types';

/** Gets a single check-in from Local Storage. */
function getCheckIn(locationSlug?: Location['slug']): CheckIn | void {
  if (!locationSlug) return;
  try {
    const checkIn = getCheckIns().find(
      (checkIn) => checkIn.locationSlug === locationSlug
    );
    console.debug(
      checkIn ? 'Found existing check-in to' : 'No check-in found for',
      'this location:',
      checkIn || locationSlug
    );
    return checkIn;
  } catch (error) {
    console.warn('Unable to get check-ins.');
    console.error(error);
    return;
  }
}

/** Gets all check-ins from Local Storage. */
function getCheckIns(): CheckIn[] {
  const checkIns = (
    JSON.parse(window.localStorage.getItem('check-ins') || '[]') as CheckIn[]
  )
    // Format dates
    .filter((checkIn) => Boolean(checkIn))
    .map((checkIn) => ({ ...checkIn, visited: new Date(checkIn.visited) }));
  console.debug('Existing check-ins:', checkIns);
  return checkIns;
}

export { getCheckIn, getCheckIns };
