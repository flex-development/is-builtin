/**
 * @file Unit Tests - BUILTIN_MODULES
 * @module builtin-modules/internal/tests/unit/BUILTIN_MODULES
 */

import pathe from '@flex-development/pathe'
import module from 'node:module'
import TEST_SUBJECT from '../builtin-modules'

describe('unit:internal/BUILTIN_MODULES', () => {
  let subject: string[]

  beforeAll(() => {
    subject = [...TEST_SUBJECT]
  })

  it('should be superset of builtinModules', () => {
    expect(subject).to.include.members(module.builtinModules)
  })

  it('should be superset of builtinModules.map(m => "node:" + m)', () => {
    // Arrange
    const subset: string[] = module.builtinModules.map(m => {
      return 'node' + pathe.delimiter + m
    })

    // Expect
    expect(subject).to.include.members(subset)
  })
})
