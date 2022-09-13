import { assertType, Equals } from '@test/utils'
import { KeysExcludeByExactType } from '@src/keys-exclude-by-exact-type'

test('KeysExcludeByExactType<T, Type>', () => {
  interface Interface {
    str: string
    num: number
    strOrNumber: string | number
  }

  type Result = KeysExcludeByExactType<Interface, string>

  assertType<Equals<Result, 'num' | 'strOrNumber'>>()
})

test('KeysExcludeByExactType<T, Type>', () => {
  interface Interface {
    str: string
    num: number
    strOrNumber: string | number
    null: null
  }

  type Result = KeysExcludeByExactType<Interface, string | number>

  assertType<Equals<Result, 'str' | 'num' | 'null'>>()
})
