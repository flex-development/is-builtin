/**
 * @file Type Tests - BUILTIN_MODULES
 * @module builtin-modules/internal/tests/unit-d/BUILTIN_MODULES
 */

import type TEST_SUBJECT from '../builtin-modules'

describe('unit-d:internal/BUILTIN_MODULES', () => {
  it('should be instance of Set<string>', () => {
    expectTypeOf<typeof TEST_SUBJECT>().toEqualTypeOf<Set<string>>()
  })
})
