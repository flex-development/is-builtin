/**
 * @file Internal - builtinModules
 * @module is-builtin/internal/builtinModules
 */

import moduleNames from '@flex-development/builtin-modules'

/**
 * List of `node:` URLs.
 *
 * @internal
 *
 * @const {string[]} nodeUrls
 */
const nodeUrls: string[] = [
  'node:sea',
  'node:test',
  'node:sqlite',
  ...moduleNames.map(name => 'node:' + name)
].sort((a, b) => a.localeCompare(b))

/**
 * Set of all modules provided by Node.js.
 *
 * > 👉 **Note**: Includes `node:` URLs.
 *
 * @internal
 *
 * @const {Set<string>} builtinModules
 */
const builtinModules: Set<string> = new Set([...moduleNames, ...nodeUrls])

export default builtinModules
