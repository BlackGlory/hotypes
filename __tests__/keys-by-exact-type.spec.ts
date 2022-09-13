import { assertType, Equals } from '@test/utils'
import { KeysByExactType } from '@src/keys-by-exact-type'

test('KeysByExactType<T, Type>', () => {
  interface Interface {
    str: string
    num: number
    strOrNumber: string | number
  }

  type Result = KeysByExactType<Interface, string>

  assertType<Equals<Result, 'str'>>()
})

test('KeysByExactType<T, Types>', () => {
  interface Interface {
    str: string
    num: number
    strOrNumber: string | number
    null: null
  }

  type Result = KeysByExactType<Interface, string | number>

  assertType<Equals<Result, 'strOrNumber'>>()
})
