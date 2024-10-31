/**
 * @file Type Tests - isBuiltin
 * @module is-builtin/tests/unit-d/isBuiltin
 */

import type testSubject from '#is-builtin'

describe('unit-d:isBuiltin', () => {
  describe('parameters', () => {
    it('should be callable with [unknown]', () => {
      expectTypeOf<typeof testSubject>().parameters.toEqualTypeOf<[unknown]>()
    })
  })

  describe('returns', () => {
    it('should return boolean', () => {
      expectTypeOf<typeof testSubject>().returns.toEqualTypeOf<boolean>()
    })
  })
})
