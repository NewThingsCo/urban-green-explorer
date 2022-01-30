# Contentful Vue

> Exploring Contentful integration with Vue 3

[![Client - GitHub Actions][client-badge]][client-logs] ![Current version][current-version]

<figure style="margin: 0 0 -1rem; position: relative; max-width: 50rem;">

![Contentful with Vue.js image by Contentful.com][cover-image]

<figcaption style="opacity: 0.5; text-align: right;">

<sup><small>Image source: [Contentful blog][contentful-blog]</small></sup>

</figcaption>

</figure>

## Requirements

- [Docker][docker] (optional)
- [Git][git]
- [Node Version Manager][nvm]
- [Node.js][node] (v16)

## Recommended IDE Setup

- [Visual Studio Code][vscode]

  <details>
  <summary>See recommended extensions</summary>

  - [Code Spell Checker][vscode-spell-checker]
  - [Debugger for Firefox][vscode-firefox]
  - [ESLint][vscode-eslint]
  - [PostCSS Language Support][vscode-postcss]
  - [Prettier][vscode-prettier]
  - [Stylelint][vscode-stylelint]
  - [Volar][vscode-volar] and [TypeScript Vue Plugin][vscode-volar-typescript]
  - [Web Accessibility][vscode-web-accessibility]
  - [WindiCSS IntelliSense][vscode-windicss]

  </details>

## Stack

- [ESLint][eslint] with [TypeScript support][eslint-ts]
- [Pinia][pinia]
- [PostCSS][postcss]
- [Prettier][prettier]
- [Stylelint][stylelint]
- [Vite][vite]

  <details>
  <summary>View all Vite plugins</summary>

  - [ESLint][vite-plugin-eslint]
  - [Pages][vite-plugin-pages]
  - [SSG][vite-ssg]
  - [Stylelint][vite-plugin-stylelint]
  - [Vue i18n][vite-plugin-vue-i18n]
  - [Windi CSS][vite-plugin-windicss]

  </details>

- [Vue 3][vue]

  <details>
  <summary>View all Vue plugins</summary>

  - [@vueuse/head][vue-use-head]
  - [Vue i18n][vue-i18n]
  - [Vue Router][vue-router]

  </details>

- [Windi CSS][windicss] (compatible with [Tailwind CSS][tailwindcss])

## Installation

```sh
# Clone the repository
$ git clone git@github.com:NewThingsCo/contentful-vue.git
$ cd contentful-vue

# Setup Node Version Manager
$ nvm install
$ nvm use

# Install dependencies
$ npm install
```

## Development

```sh
$ nvm use
$ npm run dev
```

### Lint files

```sh
$ npm run lint

# Fix files automatically
$ npm run lint:fix
```

### Prettier

Fix all files with:

```
$ npm run prettier
```

If using [Visual Studio Code][vscode], the editor should fix and format the files you edit automatically on save.

## Build for production

```sh
$ nvm use
$ npm run build # Files will be built to the /dist folder
$ npm run serve
```

[vscode]: https://code.visualstudio.com/

## Local Docker container

Build a [Docker][docker] container that includes the production version:

```sh
$ npm run build:docker
```

When the build is complete, you should be able to find `contentful-vue` listed in your local Docker images.

Click run and choose a port if needed. Default is `5000`.

## Additional documentation

- [PostCSS documentatioin][postcss-docs]
- [Vite documentation][vite-docs]
- [Vue documentation][vue-docs] ([JSX][vue-jsx-next])
  - [i18n documentation][vue-i18n-docs]
- [Windi CSS documentation][windicss-docs]

## License

[![MIT][mit-badge]][license]

[client-badge]: https://github.com/NewThingsCo/contentful-vue/workflows/Client/badge.svg
[client-logs]: https://github.com/NewThingsCo/contentful-vue/actions/workflows/client.yml
[contentful-blog]: https://www.contentful.com/blog/2021/08/26/build-using-vue-and-contentful/
[cover-image]: ./docs/cover-image.webp
[current-version]: https://img.shields.io/badge/dynamic/json?color=informational&label=Version&query=version&url=https%3A%2F%2Fraw.githubusercontent.com%2FNewThingsCo%2Fcontentful-vue%2Fmain%2Fpackage.json%3ftoken=GHSAT0AAAAAABLH3FQJLYVW7SQFMPKIAVOGYPIUMFQ
[docker]: https://www.docker.com/
[eslint-ts]: https://github.com/typescript-eslint/typescript-eslint
[eslint]: https://eslint.org/
[git]: https://git-scm.com
[license]: ./LICENSE.md
[mit-badge]: https://img.shields.io/badge/license-MIT-green.svg
[node-version]: https://img.shields.io/badge/Node-v16-brightgreen.svg
[node]: https://nodejs.org/en
[nvm]: https://github.com/nvm-sh/nvm
[pinia]: https://pinia.esm.dev/
[postcss-docs]: https://github.com/postcss/postcss
[postcss]: https://postcss.org/
[prettier]: https://prettier.io/
[stylelint]: https://stylelint.io/
[tailwindcss]: https://tailwindcss.com/
[vite]: https://vitejs.dev/
[vite-docs]: https://vitejs.dev/guide/
[vite-plugin-eslint]: https://github.com/gxmari007/vite-plugin-eslint
[vite-plugin-pages]: https://github.com/hannoeru/vite-plugin-pages
[vite-plugin-stylelint]: https://github.com/AMatlash/vite-plugin-stylelint
[vite-plugin-vue-i18n]: https://github.com/intlify/bundle-tools/tree/main/packages/vite-plugin-vue-i18n
[vite-plugin-windicss]: https://github.com/windicss/vite-plugin-windicss
[vite-ssg]: https://github.com/antfu/vite-ssg
[vscode]: https://code.visualstudio.com/
[vscode-editorconfig]: https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig
[vscode-eslint]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
[vscode-firefox]: https://marketplace.visualstudio.com/items?itemName=firefox-devtools.vscode-firefox-debug
[vscode-postcss]: https://marketplace.visualstudio.com/items?itemName=csstools.postcss
[vscode-prettier]: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
[vscode-spell-checker]: https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker
[vscode-stylelint]: https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint
[vscode-volar]: https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar
[vscode-volar-typescript]: https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.vscode-typescript-vue-plugin
[vscode-web-accessibility]: https://marketplace.visualstudio.com/items?itemName=MaxvanderSchee.web-accessibility
[vscode-windicss]: https://marketplace.visualstudio.com/items?itemName=voorjaar.windicss-intellisense
[vue]: https://v3.vuejs.org/
[vue-docs]: https://v3.vuejs.org/guide/introduction.html
[vue-i18n-docs]: https://vue-i18n.intlify.dev/introduction.html
[vue-i18n]: https://vue-i18n.intlify.dev/
[vue-jsx-next]: https://github.com/vuejs/jsx-next
[vue-router]: https://router.vuejs.org/
[vue-use-head]: https://github.com/vueuse/head
[windicss-docs]: https://windicss.org/guide/
[windicss]: https://windicss.org/
