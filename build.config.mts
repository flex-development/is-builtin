/**
 * @file Configuration - Build
 * @module config/build
 */

import { defineBuildConfig, type Config } from '@flex-development/mkbuild'
import tsconfig from './tsconfig.build.json' with { type: 'json' }

/**
 * Build config.
 *
 * @type {Config}
 */
export default defineBuildConfig({
  sourcemap: true,
  sourcesContent: false,
  target: [tsconfig.compilerOptions.target],
  tsconfig: 'tsconfig.build.json'
})
