# Contentful Vue

> Exploring Contentful integration with Vue 3

<figure style="margin: 0 0 -1rem; position: relative; max-width: 50rem;">

![Contentful with Vue.js image by Contentful.com][cover-image]

<figcaption style="opacity: 0.5; text-align: right;">
	<sup><small>Cover image by © Contentful</small></sup>
</figcaption>

</figure>

## Status

[![Client - GitHub Actions][client-badge]][client-logs]

## Requirements

- [Docker][docker] (optional)
- [Git][git]
- [Node Version Manager][nvm]
- [Node.js][node]

## Recommended IDE Setup

- [VSCode][vscode] + [Volar][volar]

## Stack

- [ESLint][eslint] with [Prettier][prettier] and [TypeScript support][eslint-ts]
- [Pinia][pinia]
- [Vite][vite] with [Vue 3][vue]

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

- [Vite documentation][vite-docs]
- [Vue documentation][vue-docs] ([JSX][vue-jsx-next])

## License

[![MIT][mit-badge]][license]

[client-badge]: https://github.com/NewThingsCo/contentful-vue/workflows/Client/badge.svg
[client-logs]: https://github.com/NewThingsCo/contentful-vue/actions/workflows/client.yml
[cover-image]: ./docs/cover-image.webp
[docker]: https://www.docker.com/
[eslint-ts]: https://github.com/typescript-eslint/typescript-eslint
[eslint]: https://eslint.org/
[git]: https://git-scm.com
[license]: ./LICENSE.md
[mit-badge]: https://img.shields.io/badge/license-MIT-green.svg
[node]: https://nodejs.org/en
[nvm]: https://github.com/nvm-sh/nvm
[pinia]: https://pinia.esm.dev/
[prettier]: https://prettier.io/
[vite-docs]: https://vitejs.dev/guide/
[vite]: https://vitejs.dev/
[volar]: https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar
[vscode]: https://code.visualstudio.com/
[vue-docs]: https://v3.vuejs.org/guide/introduction.html
[vue-jsx-next]: https://github.com/vuejs/jsx-next
[vue]: https://v3.vuejs.org/
