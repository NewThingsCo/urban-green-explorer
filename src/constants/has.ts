/** Determines whether a local storage is present or not. */
const HAS_LOCAL_STORAGE: boolean =
  'undefined' !== typeof window && 'undefined' !== typeof window.localStorage;

export { HAS_LOCAL_STORAGE };
