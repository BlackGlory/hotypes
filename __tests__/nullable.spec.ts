import { assertType, Equals } from '@test/utils'
import { Nullable } from '@src/nullable'

test('Nullable<T>', () => {
  assertType<Equals<Nullable<number>, number | undefined | null>>()
})
