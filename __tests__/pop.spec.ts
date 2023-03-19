import { assertType, Equals } from '@test/utils'
import { Pop } from '@src/pop'

describe('pop', () => {
  describe('empty tuple', () => {
    it('returns never', () => {
      type Result = Pop<[]>

      assertType<Equals<Result, never>>()
    })
  })

  describe('non-empty tuple', () => {
    it('returns last element type', () => {
      type Result = Pop<[string, number]>

      assertType<Equals<Result, [string]>>()
    })
  })
})
