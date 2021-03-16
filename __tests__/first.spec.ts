import { assertType, Equals } from '@test/utils'
import { First } from '@src/first'

describe('First', () => {
  describe('empty tuple', () => {
    it('returns never', () => {
      type Result = First<[]>

      assertType<Equals<Result, never>>()
    })
  })

  describe('non-empty tuple', () => {
    it('returns first element type', () => {
      type Result = First<[string, number]>

      assertType<Equals<Result, string>>()
    })
  })
})
