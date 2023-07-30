/**
 * @file Type Tests - isBuiltin
 * @module is-builtin/tests/unit-d/isBuiltin
 */

import type { Nilable } from '@flex-development/tutils'
import type testSubject from '../is-builtin'

describe('unit-d:isBuiltin', () => {
  it('should be callable with [Nilable<string | { href: string }>]', () => {
    // Arrange
    type Expect = [Nilable<string | { href: string }>]

    // Expect
    expectTypeOf<typeof testSubject>().parameters.toEqualTypeOf<Expect>()
  })

  it('should return boolean', () => {
    expectTypeOf<typeof testSubject>().returns.toEqualTypeOf<boolean>()
  })
})
