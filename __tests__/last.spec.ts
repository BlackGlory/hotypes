import { assertType, Equals } from '@test/utils'
import { Last } from '@src/last'

describe('Last', () => {
  describe('empty tuple', () => {
    it('returns never', () => {
      type Result = Last<[]>

      assertType<Equals<Result, never>>()
    })
  })

  describe('non-empty tuple', () => {
    it('returns last element type', () => {
      type Result = Last<[string, number]>

      assertType<Equals<Result, number>>()
    })
  })
})
