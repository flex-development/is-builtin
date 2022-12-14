# is-builtin

[![conventional commits](https://img.shields.io/badge/conventional%20commits-1.0.0-yellow.svg)](https://conventionalcommits.org)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![module type: esm](https://img.shields.io/badge/module%20type-esm-brightgreen)](https://github.com/voxpelli/badges-cjs-esm)
[![npm](https://img.shields.io/npm/v/@flex-development/is-builtin.svg)](https://npmjs.com/package/@flex-development/is-builtin)
[![license](https://img.shields.io/github/license/flex-development/is-builtin.svg)](LICENSE.md)
[![typescript](https://badgen.net/badge/-/typescript?color=2a72bc&icon=typescript&label)](https://typescriptlang.org)

> [Ponyfill][1] for [`module.isBuiltin`][2]

## Install

```sh
yarn add @flex-development/is-builtin
```

### GitHub Package Registry

To install from the GitHub Package Registry, setup a `.npmrc` or `.yarnrc.yml`
file to authenticate with the registry.

A [Personal Access Token with the `read:packages` scope][3] is required.

#### `.npmrc`

```utf-8
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
@flex-development:registry=https://npm.pkg.github.com/
```

#### `.yarnrc.yml`

```yaml
npmRegistries:
  //npm.pkg.github.com:
    npmAlwaysAuth: true
    npmAuthToken: ${GITHUB_TOKEN}

npmScopes:
  flex-development:
    npmRegistryServer: https://npm.pkg.github.com
```

### Git

See [npm-install][4] or [Git - Protocols | Yarn][5] for details on requesting a
specific branch, commit, or tag.

#### NPM

```sh
npm i flex-development/is-builtin
```

#### Yarn

```sh
yarn add @flex-development/is-builtin@flex-development/is-builtin
```

## Usage

```typescript
import isBuiltin from '@flex-development/is-builtin'

console.log(isBuiltin('@flex-development/is-builtin')) // false
console.log(isBuiltin('node:fs/promises')) // true
console.log(isBuiltin('node:fs')) // true
console.log(isBuiltin('fs')) // true
```

[1]: https://ponyfill.com
[2]: https://nodejs.org/api/module.html#moduleisbuiltinmodulename
[3]:
    https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#about-scopes-and-permissions-for-package-registries
[4]: https://docs.npmjs.com/cli/v8/commands/npm-install#description
[5]: https://yarnpkg.com/features/protocols#git
