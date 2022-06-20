/* eslint-disable no-undef */

require('regenerator-runtime');

/**
 * Global Jest settings that are set up before tests.
 */

/** Mock function for resize observer. */
global.ResizeObserver = require('resize-observer-polyfill');

/* eslint-disable @typescript-eslint/no-empty-function */
const noop = () => {};

/** Mock function for `window.scrollTo()`. */
Object.defineProperty(window, 'scrollTo', { value: noop, writable: true });
/** Mock function for `scrollTo`. */
window.scrollTo = (_x, y) => {
  document.documentElement.scrollTop = y;
};

/** Mock function for `matchMedia`. */
Object.defineProperty(window, 'matchMedia', {
  value: jest.fn().mockImplementation((query) => ({
    addEventListener: jest.fn(),
    /** @deprecated Use `addEventListener` instead. */
    addListener: jest.fn(),
    dispatchEvent: jest.fn(),
    matches: false,
    media: query,
    onchange: null,
    removeEventListener: jest.fn(),
    /** @deprecated  Use `removeEventListener` instead. */
    removeListener: jest.fn(),
  })),
  writable: true,
});
