import { assertType, Equals } from '@test/utils'
import { WithDefault } from '@src/with-default'

describe('WithDefault<T, Default>', () => {
  describe('T is non-nullable', () => {
    it('returns T', () => {
      type Result = WithDefault<string, number>

      assertType<Equals<Result, string>>()
    })
  })

  describe('T is nullable', () => {
    it('returns T | Default', () => {
      type Result = WithDefault<string | null, number>

      assertType<Equals<Result, string | number>>()
    })
  })
})
