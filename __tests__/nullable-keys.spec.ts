import { assertType, Equals } from '@test/utils'
import { NullableKeys } from '@src/nullable-keys'

test('NullableKeys<T>', () => {
  interface Interface {
    str: string
    null: null
    undefined: undefined
    nullOrUndefined: null | undefined
  }

  type Result = NullableKeys<Interface>

  assertType<Equals<Result, 'null' | 'undefined' | 'nullOrUndefined'>>()
})
