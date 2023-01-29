/**
 * @file Internal - BUILTIN_MODULES
 * @module is-builtin/internal/BUILTIN_MODULES
 */

import { builtinModules } from '@flex-development/builtin-modules'

/**
 * Set containing the names of modules provided by Node.js. In addition to
 * module names, the set also contains a [`node:` URL][1] for each name.
 *
 * **Note**: Given the running version of Node.js, the set is a **superset** of
 * [`builtinModules`][2].
 *
 * [1]: https://nodejs.org/api/esm.html#node-imports
 * [2]: https://nodejs.org/api/module.html#modulebuiltinmodules
 *
 * @const {Set<string>} BUILTIN_MODULES
 */
const BUILTIN_MODULES: Set<string> = new Set<string>(
  builtinModules.flatMap(name => [name, 'node:' + name])
)

export default BUILTIN_MODULES
