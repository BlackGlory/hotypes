import { assertType, Equals } from '@test/utils'
import { KeysExcludeExtendType } from '@src/keys-exclude-extend-type'

test('KeysExcludeExtendType<T, Type>', () => {
  interface Interface {
    str: string
    num: number
    strOrNumber: string | number
  }

  type Result = KeysExcludeExtendType<Interface, string>

  assertType<Equals<Result, 'num'>>()
})

test('KeysExcludeExtendType<T, Types>', () => {
  interface Interface {
    str: string
    num: number
    strOrNumber: string | number
    null: null
  }

  type Result = KeysExcludeExtendType<Interface, string | number>

  assertType<Equals<Result, 'null'>>()
})
