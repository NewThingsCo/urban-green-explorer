/** Determines whether code should only run on the client-side. */
const isClient: boolean = 'undefined' !== typeof window;

export { isClient };
