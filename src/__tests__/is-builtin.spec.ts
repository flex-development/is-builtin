/**
 * @file Unit Tests - isBuiltin
 * @module is-builtin/tests/unit/isBuiltin
 */

import BUILTIN_MODULES from '#src/internal/builtin-modules'
import { URL, pathToFileURL } from 'node:url'
import testSubject from '../is-builtin'

describe('unit:isBuiltin', () => {
  it('should return false if id is not builtin module', () => {
    // Arrange
    const cases: (URL | string)[] = [
      '@flex-development/is-builtin',
      pathToFileURL('node_modules/@flex-development/builtin-modules/')
    ]

    // Act + Expect
    cases.forEach(id => expect(testSubject(id)).to.be.false)
  })

  it('should return true if id is builtin module', () => {
    BUILTIN_MODULES.forEach(id => expect(testSubject(id)).to.be.true)
  })
})
