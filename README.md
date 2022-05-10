# Urban Green Explorer

> Exploring the city of Helsinki.

[![Client - GitHub Actions][client-badge]][client-logs] [![Netlify Status][netlify-image]][netlify-deploys]

## Roadmap

See [Projects][roadmap] on GitHub.

## Stack

- [Leaflet][leaflet]
- [Pinia][pinia]
- [TypeScript][typescript]
- [Vite][vite] with [Vue 3][vue] and the following extensions:

  <details>
  <summary>See all extensions</summary>

  - [Local SSL support][vite-plugin-mkcert]
  - [Vite SVG loader][vite-svg-loader]
  - [Vue i18n][vue-i18n]
  - [Vue Router][vue-router]

  </details>

- [Windi CSS][windi-css] (compatible with [Tailwind CSS][tailwind-css])

## Development tools

- [Commitlint][commitlint]
- [ESLint][eslint] with [Prettier][prettier] and [TypeScript support][eslint-ts]
- [Husky][husky]
- [Jest][jest]
- [Lint-staged][lint-staged]
- [Playwright][playwright]
- [PostCSS][postcss]
- [Stylelint][stylelint]

## Requirements

- [Docker][docker] (optional)
- [Git][git]
- [Node Version Manager][nvm]
- [Node.js][node] (v16)

## Recommended IDE Setup

[Visual Studio Code][vscode] with these extensions:

- [ESLint][vscode-eslint]
- [i18n Ally][vscode-i18n-ally]
- [Prettier][vscode-prettier]
- [Stylelint][vscode-stylelint]
- [Volar][vscode-volar]
- [Windi CSS][vscode-windi-css]

## Installation

```shell
# Clone the repository
$ git clone git@github.com:NewThingsCo/urban-green-explorer.git
$ cd urban-green-explorer

# Install the correct Node version
$ nvm install

# Install dependencies
$ npm install
```

## Development

```shell
$ nvm install
$ npm run dev
```

### Commits

This project is using the [Conventional Commits][conventional-commits] specification with some modifications specified in the [package.json](./package.json) file.

All commit messages, scopes and types should be in _Sentence case_, i.e.:

```shell
$ git commit -m "Feat: New feature"
```

[Husky][husky] will run a [pre-commit](./.husky/pre-commit) hook to ensure the commits follow the same pattern.

#### Skip Git hooks

Add the following env to skip Git hooks:

```shell
$ SKIP_HUSKY=true git push
```

### Lint files

Check for errors:

```shell
$ npm run lint
```

Fix files automatically:

```shell
$ npm run lint:fix
```

### Prettier

Fix files automatically:

```shell
$ npm run prettier
```

If you're using [Visual Studio Code][vscode], the editor should fix and format the files you edit automatically on save. See [list of recommended extensions](#recommended-ide-setup) for more info.

## Build for production

```shell
$ nvm install
$ npm run build # Files will be built to the /dist folder
$ npm start
```

To specify a port, add `npm start -- --port=4000`.

[vscode]: https://code.visualstudio.com/

## Local Docker container

Build a [Docker][docker] container that includes the production version:

```shell
$ npm run build:docker
```

When the build is complete, you should be able to find `urban-green-explorer` listed in your local Docker images.

Click run and choose a port if needed. Default is `8080`.

## Additional documentation

- [PostCSS documentatioin][postcss-docs]
  - [Preset Env][postcss-preset-env]
- [Vite documentation][vite-docs]
- [Vue documentation][vue-docs]
  - [i18n documentation][vue-i18n-docs]
  - [JSX syntax][vue-jsx-next]
- [Windi CSS documentation][windi-css-docs]

## License

[![MIT][mit-badge]][license]

[client-badge]: https://github.com/NewThingsCo/contentful-vue/workflows/Client/badge.svg
[client-logs]: https://github.com/NewThingsCo/contentful-vue/actions/workflows/client.yml
[commitlint]: https://commitlint.js.org/
[conventional-commits]: https://www.conventionalcommits.org/
[docker]: https://www.docker.com/
[eslint-ts]: https://www.npmjs.com/package/@typescript-eslint/eslint-plugin
[eslint]: https://eslint.org/
[git]: https://git-scm.com
[husky]: https://typicode.github.io/husky/
[jest]: https://jestjs.io/
[leaflet]: https://leafletjs.com/
[license]: ./LICENSE.md
[lint-staged]: https://www.npmjs.com/package/lint-staged
[mit-badge]: https://img.shields.io/badge/license-MIT-green.svg
[netlify-deploys]: https://app.netlify.com/sites/urban-green-explorer/deploys
[netlify-image]: https://api.netlify.com/api/v1/badges/3fd28fd5-6bb4-4bd8-a3eb-1aeb35e04bd3/deploy-status
[node-version]: https://img.shields.io/badge/Node-v16-brightgreen.svg
[node]: https://nodejs.org/en
[nvm]: https://github.com/nvm-sh/nvm
[pinia]: https://pinia.esm.dev/
[playwright]: https://playwright.dev/
[postcss-docs]: https://github.com/postcss/postcss
[postcss-preset-env]: https://preset-env.cssdb.org/
[postcss]: https://postcss.org/
[prettier]: https://prettier.io/
[pretty-quick]: https://www.npmjs.com/package/pretty-quick
[roadmap]: https://github.com/NewThingsCo/urban-green-explorer/projects/2
[stylelint]: https://stylelint.io/
[tailwind-css]: https://tailwindcss.com/
[typescript]: https://www.typescriptlang.org/
[vite-docs]: https://vitejs.dev/guide/
[vite-plugin-mkcert]: https://www.npmjs.com/package/vite-plugin-mkcert
[vite-svg-loader]: https://www.npmjs.com/package/vite-svg-loader
[vite]: https://vitejs.dev/
[vscode-eslint]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
[vscode-i18n-ally]: https://marketplace.visualstudio.com/items?itemName=lokalise.i18n-ally
[vscode-prettier]: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
[vscode-stylelint]: https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint
[vscode-volar]: https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar
[vscode-windi-css]: https://marketplace.visualstudio.com/items?itemName=voorjaar.windicss-intellisense
[vscode]: https://code.visualstudio.com/
[vue-docs]: https://v3.vuejs.org/guide/introduction.html
[vue-i18n-docs]: https://vue-i18n.intlify.dev/introduction.html
[vue-i18n]: https://vue-i18n.intlify.dev/
[vue-jsx-next]: https://github.com/vuejs/jsx-next
[vue-router]: https://router.vuejs.org/
[vue]: https://v3.vuejs.org/
[windi-css-docs]: https://windicss.org/guide/
[windi-css]: https://windicss.org/
