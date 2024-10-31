/**
 * @file Unit Tests - builtinModules
 * @module is-builtin/internal/tests/unit/builtinModules
 */

import testSubject from '#builtin-modules'
import pathe from '@flex-development/pathe'
import module from 'node:module'

describe('unit:internal/builtinModules', () => {
  it('should include all members of `module.builtinModules`', () => {
    expect(testSubject).to.contain.members(module.builtinModules)
  })

  it('should include all members of `module.builtinModules` (node:)', () => {
    expect(testSubject).to.contain.members(module.builtinModules.map(m => {
      return 'node' + pathe.delimiter + m
    }))
  })
})
