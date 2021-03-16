import { assertType, Equals } from '@test/utils'
import { KeysStrict } from '@src/keys-strict'

test('KeysStrict<T>', () => {
  interface Interface {
    str: string
    num: number
  }

  type Result = KeysStrict<Interface>

  assertType<Equals<Result, 'str' | 'num'>>()
})

test('KeysStrict<T, Type>', () => {
  interface Interface {
    str: string
    num: number
    strOrNumber: string | number
  }

  type Result = KeysStrict<Interface, string>

  assertType<Equals<Result, 'str'>>()
})

test('KeysStrict<T, Types>', () => {
  interface Interface {
    str: string
    num: number
    strOrNumber: string | number
    null: null
  }

  type Result = KeysStrict<Interface, string | number>

  assertType<Equals<Result, 'str' | 'num' | 'strOrNumber'>>()
})
