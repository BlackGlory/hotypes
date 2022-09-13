import { assertType, Equals } from '@test/utils'
import { KeysExcludeByType } from '@src/keys-exclude-by-type'

test('KeysExcludeByType<T, Type>', () => {
  interface Interface {
    str: string
    num: number
    strOrNumber: string | number
  }

  type Result = KeysExcludeByType<Interface, string>

  assertType<Equals<Result, 'num'>>()
})

test('KeysExcludeByType<T, Types>', () => {
  interface Interface {
    str: string
    num: number
    strOrNumber: string | number
    null: null
  }

  type Result = KeysExcludeByType<Interface, string | number>

  assertType<Equals<Result, 'null'>>()
})
