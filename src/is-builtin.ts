/**
 * @file isBuiltin
 * @module is-builtin
 */

import { builtinModules } from 'node:module'

/**
 * Builtin modules.
 *
 * @const {Set<string>} BUILTINS
 */
const BUILTINS = new Set(builtinModules.flatMap(m => [m, 'node:' + m]))

/**
 * Checks if `specifier` is a [builtin module][1].
 *
 * [1]: https://nodejs.org/api/esm.html#builtin-modules
 *
 * @example
 *  isBuiltin('@flex-development/is-builtin') // false
 * @example
 *  isBuiltin('node:fs/promises') // true
 * @example
 *  isBuiltin('os') // true
 *
 * @param {string} specifier - Module specifier to check
 * @return {boolean} `true` if `specifier` is builtin module, `false` otherwise
 */
const isBuiltin = (specifier: string): boolean => BUILTINS.has(specifier)

export default isBuiltin
