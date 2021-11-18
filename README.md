# Contentful Vue

> Exploring Contentful integration with Vue 3

## Status

[![Client - GitHub Actions][client-badge]][client-logs]

## Requirements

- [Docker][docker] (optional)
- [Git][git]
- [Node Version Manager][nvm]
- [Node.js][node]

## Recommended IDE Setup

- [VSCode][vscode] + [Volar][volar]

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

# With auto-fix
$ npm run lint:fix
```

### Prettier

Fix all files with:

```
$ npm run prettier
```

If using [Visual Studio Code][vscode], the editor should format the files you edit automatically.

## Build for production

```sh
$ nvm use
$ npm run build
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

## License

[![MIT][mit-badge]][license]

[client-badge]: https://github.com/NewThingsCo/contentful-vue/workflows/Client/badge.svg
[client-logs]: https://github.com/NewThingsCo/contentful-vue/actions/workflows/client.yml
[docker]: https://www.docker.com/
[git]: https://git-scm.com
[license]: ./LICENSE.md
[mit-badge]: https://img.shields.io/badge/license-MIT-green.svg
[node]: https://nodejs.org/en
[nvm]: https://github.com/nvm-sh/nvm
[volar]: https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar
[vscode]: https://code.visualstudio.com/
