/**
 * @file Unit Tests - isBuiltin
 * @module is-builtin/tests/unit/isBuiltin
 */

import builtinModules from '#builtin-modules'
import testSubject from '#is-builtin'
import pkg from '@flex-development/is-builtin/package.json'

describe('unit:isBuiltin', () => {
  it.each<Parameters<typeof testSubject>>([
    ['test'],
    [null],
    [pkg.name],
    [new URL('https://esm.sh/' + pkg.name)]
  ])('should return `false` if `m` is not builtin module (%#)', m => {
    expect(testSubject(m)).to.be.false
  })

  it.each([...builtinModules].map(m => {
    return typeof m === 'string' ? m : new URL(m)
  }))('should return `true` if `m` is builtin module (%j)', m => {
    expect(testSubject(m)).to.be.true
  })
})
