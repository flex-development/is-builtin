/**
 * @file Unit Tests - isBuiltin
 * @module is-builtin/tests/unit/isBuiltin
 */

import module from 'node:module'
import testSubject from '../is-builtin'

describe('unit:isBuiltin', () => {
  it('should return false if id is not builtin module', () => {
    expect(testSubject('@flex-development/is-builtin')).to.be.false
  })

  it('should return true if id is builtin module', () => {
    // Arrange
    const cases: string[] = module.builtinModules.flatMap(m => [m, 'node:' + m])

    // Act + Expect
    cases.forEach(id => expect(testSubject(id)).to.be.true)
  })
})
