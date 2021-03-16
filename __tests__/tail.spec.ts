import { assertType, Equals } from '@test/utils'
import { Tail } from '@src/tail'

describe('Tail', () => {
  describe('empty tuple', () => {
    it('returns never', () => {
      type Result = Tail<[]>

      assertType<Equals<Result, never>>()
    })
  })

  describe('non-empty tuple', () => {
    it('returns rest element types', () => {
      type Result = Tail<[string, number]>

      assertType<Equals<Result, [number]>>()
    })
  })
})
