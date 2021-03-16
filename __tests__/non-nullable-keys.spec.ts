import { assertType, Equals } from '@test/utils'
import { NonNullableKeys } from '@src/non-nullable-keys'

test('NonNullableKeys<T>', () => {
  interface Interface {
    str: string
    null: null
    undefined: undefined
    nullOrUndefined: null | undefined
  }

  type Result = NonNullableKeys<Interface>

  assertType<Equals<Result, 'str'>>()
})
