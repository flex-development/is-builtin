/**
 * @file isBuiltin
 * @module is-builtin/isBuiltin
 */

import builtinModules from '#builtin-modules'

/**
 * Check if `m` references a [builtin module][builtin-module].
 *
 * > 👉 **Note**: `m` will be converted to a string (`String(m)`) before being
 * > checked.
 *
 * [builtin-module]: https://nodejs.org/api/esm.html#builtin-modules
 *
 * @example
 *  isBuiltin('@flex-development/is-builtin') // false
 * @example
 *  isBuiltin('assert') // true
 * @example
 *  isBuiltin('fs/promises') // true
 * @example
 *  isBuiltin(new URL('node:os')) // true
 * @example
 *  isBuiltin('node:module') // true
 * @example
 *  isBuiltin('node:test/reporters') // true
 * @example
 *  isBuiltin('test') // false
 * @example
 *  isBuiltin(null) // false
 *
 * @this {void}
 *
 * @param {unknown} m
 *  The thing to check
 * @return {boolean}
 *  `true` if `m` references builtin module, `false` otherwise
 */
function isBuiltin(this: void, m: unknown): boolean {
  return builtinModules.has(String(m))
}

export default isBuiltin
