/**
 * @file isBuiltin
 * @module is-builtin/isBuiltin
 */

import BUILTIN_MODULES from '#src/internal/builtin-modules'
import type { URL } from 'node:url'

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
 * @example
 *  import { URL, pathToFileURL } from 'node:url'
 *
 *  isBuiltin(new URL('node:os')) // true
 *  isBuiltin(pathToFileURL('.')) // false
 *
 * @param {URL | string} id - Module id to evaluate
 * @return {boolean} `true` if `id` is builtin module, `false` otherwise
 */
const isBuiltin = (id: URL | string): boolean => {
  return BUILTIN_MODULES.has(typeof id === 'object' ? id.href : id)
}

export default isBuiltin
