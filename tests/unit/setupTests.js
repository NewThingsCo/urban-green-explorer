global.ResizeObserver = require('resize-observer-polyfill');

/* eslint-disable @typescript-eslint/no-empty-function */
const noop = () => {};

Object.defineProperty(window, 'scrollTo', { value: noop, writable: true });
