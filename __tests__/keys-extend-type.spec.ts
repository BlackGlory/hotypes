import { assertType, Equals } from '@test/utils'
import { KeysExtendType } from '@src/keys-extend-type'

test('KeysExtendType<T, Type>', () => {
  interface Interface {
    str: string
    num: number
    strOrNumber: string | number
  }

  type Result = KeysExtendType<Interface, string>

  assertType<Equals<Result, 'str' | 'strOrNumber'>>()
})

test('KeysExtendType<T, Types>', () => {
  interface Interface {
    str: string
    num: number
    strOrNumber: string | number
    null: null
  }

  type Result = KeysExtendType<Interface, string | number>

  assertType<Equals<Result, 'str' | 'num' | 'strOrNumber'>>()
})
