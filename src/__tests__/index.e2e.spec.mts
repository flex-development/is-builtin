/**
 * @file E2E Tests - api
 * @module is-builtin/tests/e2e/api
 */

import * as testSubject from '@flex-development/is-builtin'

describe('e2e:is-builtin', () => {
  it('should expose public api', () => {
    expect(Object.keys(testSubject)).eql(['default', 'isBuiltin'])
  })
})
