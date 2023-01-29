/**
 * @file Unit Tests - isBuiltin
 * @module is-builtin/tests/unit/isBuiltin
 */

import module from 'node:module'
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
    // Arrange
    const cases: (URL | string)[] = module.builtinModules.flatMap(name => {
      return [name, 'node:' + name, new URL('node:' + name)]
    })

    // Act + Expect
    cases.forEach(id => expect(testSubject(id)).to.be.true)
  })
})
