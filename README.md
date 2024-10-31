# is-builtin

[![github release](https://img.shields.io/github/v/release/flex-development/is-builtin.svg?include_prereleases\&sort=semver)](https://github.com/flex-development/is-builtin/releases/latest)
[![npm](https://img.shields.io/npm/v/@flex-development/is-builtin.svg)](https://npmjs.com/package/@flex-development/is-builtin)
[![codecov](https://codecov.io/github/flex-development/is-builtin/branch/main/graph/badge.svg?token=MQ427OD7XD)](https://codecov.io/github/flex-development/is-builtin)
[![module type: esm](https://img.shields.io/badge/module%20type-esm-brightgreen)](https://github.com/voxpelli/badges-cjs-esm)
[![license](https://img.shields.io/github/license/flex-development/is-builtin.svg)](LICENSE.md)
[![conventional commits](https://img.shields.io/badge/-conventional%20commits-fe5196?logo=conventional-commits\&logoColor=ffffff)](https://conventionalcommits.org)
[![typescript](https://img.shields.io/badge/-typescript-3178c6?logo=typescript\&logoColor=ffffff)](https://typescriptlang.org)
[![vitest](https://img.shields.io/badge/-vitest-6e9f18?style=flat\&logo=vitest\&logoColor=ffffff)](https://vitest.dev)
[![yarn](https://img.shields.io/badge/-yarn-2c8ebb?style=flat\&logo=yarn\&logoColor=ffffff)](https://yarnpkg.com)

Universal drop-in replacement for [`module.isBuiltin`][moduleisbuiltin]

## Contents

- [What is this?](#what-is-this)
- [When should I use this?](#when-should-i-use-this)
- [Install](#install)
- [Use](#use)
- [API](#api)
  - [`isBuiltin(m)`](#isbuiltinm)
- [Types](#types)
- [Related](#related)
- [Contribute](#contribute)

## What is this?

This package is a universal drop-in replacement for [`module.isBuiltin`][moduleisbuiltin].

## When should I use this?

This package exports a single function that can be used to determine if a module is a [builtin module][builtin]. Builtin
modules are core modules maintained by Node.js. They can be imported by name or using a [`node:` URL][node-url].

## Install

This package is [ESM only][esm].

In Node.js (version 18+) with [yarn][]:

```sh
yarn add @flex-development/is-builtin
```

<blockquote>
  <small>
    See <a href='https://yarnpkg.com/protocol/git'>Git - Protocols | Yarn</a>
    &nbsp;for details regarding installing from Git.
  </small>
</blockquote>

In Deno with [`esm.sh`][esmsh]:

```ts
import { isBuiltin } from 'https://esm.sh/@flex-development/is-builtin'
```

In browsers with [`esm.sh`][esmsh]:

```html
<script type="module">
  import { isBuiltin } from 'https://esm.sh/@flex-development/is-builtin'
</script>
```

## Use

```ts
import { isBuiltin } from '@flex-development/is-builtin'

isBuiltin('@flex-development/is-builtin') // false
isBuiltin('assert')                       // true
isBuiltin('fs/promises')                  // true
isBuiltin(new URL('node:os'))             // true
isBuiltin('node:module')                  // true
isBuiltin('node:test/reporters')          // true
isBuiltin('test')                         // false
isBuiltin(null)                           // false
```

## API

This package exports the identifier [`isBuiltin`](#isbuiltinm).

There is no default export.

### `isBuiltin(m)`

Check if `m` references a [builtin module][builtin].

> 👉 **Note**: `m` will be converted to a string (`String(m)`) before being checked.

#### Parameters

- `m` (`unknown`) — the thing to check

#### Returns

`true` if `m` references builtin module, `false` otherwise.

## Types

This package is fully typed with [TypeScript][].

## Related

- [`builtin-modules`][builtin-modules]
  — Universal drop-in replacement for [`module.builtinModules`][modulebuiltinmodules]

## Contribute

See [`CONTRIBUTING.md`](./CONTRIBUTING.md).

This project has a [code of conduct](./CODE_OF_CONDUCT.md). By interacting with this repository, organization, or
community you agree to abide by its terms.

[builtin-modules]: https://github.com/flex-development/builtin-modules

[builtin]: https://nodejs.org/api/esm.html#builtin-modules

[esm]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c

[esmsh]: https://esm.sh

[modulebuiltinmodules]: https://nodejs.org/api/module.html#modulebuiltinmodules

[moduleisbuiltin]: https://nodejs.org/api/module.html#moduleisbuiltinmodulename

[node-url]: https://nodejs.org/api/esm.html#node-imports

[typescript]: https://www.typescriptlang.org

[yarn]: https://yarnpkg.com
