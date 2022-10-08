/**
 * @file Unit Tests - isBuiltin
 * @module is-builtin/tests/isBuiltin
 */

import testSubject from '../is-builtin'

describe('unit:isBuiltin', () => {
  it('should return false for third-party module', () => {
    expect(testSubject('@flex-development/is-builtin')).to.be.false
  })

  it('should return true for builtin module', () => {
    expect(testSubject('os')).to.be.true
  })

  it('should return true for builtin module with node protocol', () => {
    expect(testSubject('node:fs/promises')).to.be.true
  })
})
