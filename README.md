# is-builtin

[![npm](https://img.shields.io/npm/v/@flex-development/is-builtin.svg)](https://npmjs.com/package/@flex-development/is-builtin)
[![codecov](https://codecov.io/github/flex-development/is-builtin/branch/main/graph/badge.svg?token=MQ427OD7XD)](https://codecov.io/github/flex-development/is-builtin)
[![module type: esm](https://img.shields.io/badge/module%20type-esm-brightgreen)](https://github.com/voxpelli/badges-cjs-esm)
[![license](https://img.shields.io/github/license/flex-development/is-builtin.svg)](LICENSE.md)
[![conventional commits](https://img.shields.io/badge/-conventional%20commits-fe5196?logo=conventional-commits&logoColor=ffffff)](https://conventionalcommits.org/)
[![typescript](https://img.shields.io/badge/-typescript-3178c6?logo=typescript&logoColor=ffffff)](https://typescriptlang.org/)
[![vitest](https://img.shields.io/badge/-vitest-6e9f18?style=flat&logo=vitest&logoColor=ffffff)](https://vitest.dev/)
[![yarn](https://img.shields.io/badge/-yarn-2c8ebb?style=flat&logo=yarn&logoColor=ffffff)](https://yarnpkg.com/)

Universal drop-in replacement for [`module.isBuiltin`][1]

## Contents

- [What is this?](#what-is-this)
- [When should I use this?](#when-should-i-use-this)
- [Install](#install)
- [Use](#use)
- [API](#api)
  - [isBuiltin(id)](#isbuiltinid-url--string--boolean)
- [Types](#types)
- [Related](#related)
- [Contribute](#contribute)

## What is this?

This package is a universal drop-in replacement for [`module.isBuiltin`][1].

## When should I use this?

This package exports a single function that can be used to determine if a module is a [builtin module][2]. Builtin
modules are core modules maintained by Node.js. They can be imported by name or using a [`node:` URL][3].

## Install

This package is [ESM only][4].

```sh
yarn add @flex-development/is-builtin
```

From Git:

```sh
yarn add @flex-development/is-builtin@flex-development/is-builtin
```

<blockquote>
  <small>
    See <a href='https://yarnpkg.com/features/protocols#git'>Git - Protocols | Yarn</a>
    &nbsp;for details on requesting a specific branch, commit, or tag.
  </small>
</blockquote>

## Use

```typescript
import { isBuiltin } from '@flex-development/is-builtin'
import { URL, pathToFileURL } from 'node:url'

console.debug(isBuiltin('@flex-development/is-builtin'))                        // false
console.debug(isBuiltin('fs/promises'))                                         // true
console.debug(isBuiltin('node:module'))                                         // true
console.debug(isBuiltin(new URL('node:os')))                                    // true
console.debug(isBuiltin(pathToFileURL('node_modules/@flex-development/mlly')))  // false
```

## API

This package exports the following identifiers:

- [`isBuiltin`](#isbuiltinid-url--string--boolean)

There is no default export.

### `isBuiltin(id: URL | string) => boolean`

Checks if the given module `id` is a [builtin module][2].

Supports [bare specifiers][5] and [`node:` URLs][3]. If the given module `id` is an instance of [`URL`][6],
[`id.href`][7] will be checked instead.

#### Parameters

- `id` (`URL | string`) &mdash; Module id to evaluate

#### Returns

Returns `true` if `id` is a builtin module, `false` otherwise.

## Types

This package is fully typed with [TypeScript][8].

## Related

- [`builtin-modules`][9] &mdash; Universal drop-in replacement for [`module.builtinModules`][10]

## Contribute

See [`CONTRIBUTING.md`](CONTRIBUTING.md).

[1]: https://nodejs.org/api/module.html#moduleisbuiltinmodulename
[2]: https://nodejs.org/api/esm.html#builtin-modules
[3]: https://nodejs.org/api/esm.html#node-imports
[4]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c
[5]: https://nodejs.org/api/esm.html#terminology
[6]: https://nodejs.org/api/url.html#class-url
[7]: https://nodejs.org/api/url.html#urlhref
[8]: https://www.typescriptlang.org
[9]: https://github.com/flex-development/builtin-modules
[10]: https://nodejs.org/api/module.html#modulebuiltinmodules
