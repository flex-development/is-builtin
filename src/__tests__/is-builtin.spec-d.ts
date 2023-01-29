/**
 * @file Type Tests - isBuiltin
 * @module is-builtin/tests/unit-d/isBuiltin
 */

import type { URL } from 'node:url'
import type testSubject from '../is-builtin'

describe('unit-d:isBuiltin', () => {
  it('should be callable with [URL | string]', () => {
    // Arrange
    type Parameters = [URL | string]

    // Expect
    expectTypeOf<typeof testSubject>().parameters.toEqualTypeOf<Parameters>()
  })

  it('should return type of boolean', () => {
    expectTypeOf<typeof testSubject>().returns.toBeBoolean()
  })
})
