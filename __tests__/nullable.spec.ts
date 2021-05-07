import { assertType, Equals } from '@test/utils'
import { Nullable } from '@src/nullable'

test('Nullable<T>', () => {
  type Result = Nullable<number>

  assertType<Equals<Result, number | undefined | null>>()
})
