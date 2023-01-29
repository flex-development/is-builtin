/**
 * @file Type Tests - isBuiltin
 * @module is-builtin/tests/unit-d/isBuiltin
 */

import type testSubject from '../is-builtin'

describe('unit-d:isBuiltin', () => {
  it('should be callable with [string]', () => {
    expectTypeOf<typeof testSubject>().parameters.toEqualTypeOf<[string]>()
  })

  it('should return type of boolean', () => {
    expectTypeOf<typeof testSubject>().returns.toBeBoolean()
  })
})
