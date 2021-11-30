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

- [VSCode][vscode] with these extensions:
  - [ESLint][vscode-eslint]
  - [Prettier][vscode-prettier]
  - [Stylelint][vscode-stylelint]
  - [Volar][volar]
  - [Volar][vscode-volar]
  - [Windi CSS][vscode-windi-css]

## Stack

- [ESLint][eslint] with [Prettier][prettier] and [TypeScript support][eslint-ts]
- [Pinia][pinia]
- [PostCSS][postcss]
- [Stylelint][stylelint]
- [Vite][vite] with [Vue 3][vue]
- [Windi CSS][windi-css] (compatible with [Tailwind CSS][tailwind-css])

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
  - [Preset Env][postcss-preset-env]
- [Vite documentation][vite-docs]
- [Vue documentation][vue-docs] ([JSX][vue-jsx-next])
- [Windi CSS documentation][windi-css-docs]

## License

[![MIT][mit-badge]][license]

[client-badge]: https://github.com/NewThingsCo/contentful-vue/workflows/Client/badge.svg
[client-logs]: https://github.com/NewThingsCo/contentful-vue/actions/workflows/client.yml
[contentful-blog]: https://www.contentful.com/blog/2021/08/26/build-using-vue-and-contentful/
[cover-image]: ./docs/cover-image.webp
[current-version]: https://img.shields.io/badge/dynamic/json?color=informational&label=Version&query=version&url=https%3A%2F%2Fraw.githubusercontent.com%2FNewThingsCo%2Fcontentful-vue%2Fmain%2Fpackage.json
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
[postcss-preset-env]: https://preset-env.cssdb.org/
[postcss]: https://postcss.org/
[prettier]: https://prettier.io/
[stylelint]: https://stylelint.io/
[tailwind-css]: https://tailwindcss.com/
[vite-docs]: https://vitejs.dev/guide/
[vite]: https://vitejs.dev/
[vscode-eslint]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
[vscode-prettier]: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
[vscode-stylelint]: https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint
[vscode-volar]: https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar
[vscode-windi-css]: https://marketplace.visualstudio.com/items?itemName=voorjaar.windicss-intellisense
[vscode]: https://code.visualstudio.com/
[vue-docs]: https://v3.vuejs.org/guide/introduction.html
[vue-jsx-next]: https://github.com/vuejs/jsx-next
[vue]: https://v3.vuejs.org/
[windi-css-docs]: https://windicss.org/guide/
[windi-css]: https://windicss.org/
