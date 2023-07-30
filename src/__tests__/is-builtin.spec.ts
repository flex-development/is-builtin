/**
 * @file Unit Tests - isBuiltin
 * @module is-builtin/tests/unit/isBuiltin
 */

import BUILTIN_MODULES from '#src/internal/builtin-modules'
import * as mlly from '@flex-development/mlly'
import pkg from '../../package.json' assert { type: 'json' }
import testSubject from '../is-builtin'

describe('unit:isBuiltin', () => {
  it('should return false if id is not builtin module', () => {
    // Arrange
    const cases: Parameters<typeof testSubject>[] = [
      [''],
      [null],
      [pkg.name],
      [mlly.toURL('node_modules/@flex-development/builtin-modules')]
    ]

    // Act + Expect
    cases.forEach(([id]) => expect(testSubject(id)).to.be.false)
  })

  it('should return true if id is builtin module', () => {
    BUILTIN_MODULES.forEach(id => expect(testSubject(id)).to.be.true)
  })
})
