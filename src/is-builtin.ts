/**
 * @file isBuiltin
 * @module is-builtin/isBuiltin
 */

import BUILTIN_MODULES from '#src/internal/builtin-modules'

/**
 * Checks if the given module `id` is a [builtin module][1].
 *
 * Supports [bare specifiers][2] and [`node:` URLs][3].
 *
 * [1]: https://nodejs.org/api/esm.html#builtin-modules
 * [2]: https://nodejs.org/api/esm.html#terminology
 * [3]: https://nodejs.org/api/esm.html#node-imports
 *
 * @example
 *  isBuiltin('@flex-development/is-builtin') // false
 * @example
 *  isBuiltin('node:module') // true
 * @example
 *  isBuiltin('path/posix') // true
 *
 * @param {string} id - Module name to evaluate
 * @return {boolean} `true` if `id` is builtin module, `false` otherwise
 */
const isBuiltin = (id: string): boolean => BUILTIN_MODULES.has(id)

export default isBuiltin
