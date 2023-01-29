/**
 * @file Unit Tests - BUILTIN_MODULES
 * @module builtin-modules/internal/tests/unit/BUILTIN_MODULES
 */

import module from 'node:module'
import TEST_SUBJECT from '../builtin-modules'

describe('unit:internal/BUILTIN_MODULES', () => {
  it('should be superset of builtinModules', () => {
    expect([...TEST_SUBJECT]).to.include.members(module.builtinModules)
  })

  it('should be superset of builtinModules.map(name => "node:" + name)', () => {
    // Arrange
    const urls: string[] = module.builtinModules.map(name => 'node:' + name)

    // Expect
    expect([...TEST_SUBJECT]).to.include.members(urls)
  })
})
