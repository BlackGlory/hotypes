import { assertType, Equals } from '@test/utils'
import { Head } from '@src/head'

describe('Head', () => {
  describe('empty tuple', () => {
    it('returns never', () => {
      type Result = Head<[]>

      assertType<Equals<Result, never>>()
    })
  })

  describe('non-empty tuple', () => {
    it('returns first element type', () => {
      type Result = Head<[string, number]>

      assertType<Equals<Result, string>>()
    })
  })
})
