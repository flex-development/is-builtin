/**
 * @file Type Tests - isBuiltin
 * @module is-builtin/tests/unit-d/isBuiltin
 */

import type { URL } from 'node:url'
import type testSubject from '../is-builtin'

describe('unit-d:isBuiltin', () => {
  it('should be callable with [URL | string]', () => {
    // Arrange
    type P = [URL | string]

    // Expect
    expectTypeOf<typeof testSubject>().parameters.toEqualTypeOf<P>()
  })

  it('should return boolean', () => {
    expectTypeOf<typeof testSubject>().returns.toEqualTypeOf<boolean>()
  })
})
