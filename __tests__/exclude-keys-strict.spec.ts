import { assertType, Equals } from '@test/utils'
import { ExcludeKeysStrict } from '@src/exclude-keys-strict'

test('ExcludeKeysStrict<T, Type>', () => {
  interface Interface {
    str: string
    num: number
    strOrNumber: string | number
  }

  type Result = ExcludeKeysStrict<Interface, string>

  assertType<Equals<Result, 'num' | 'strOrNumber'>>()
})

test('ExcludeKeysStrict<T, Type>', () => {
  interface Interface {
    str: string
    num: number
    strOrNumber: string | number
    null: null
  }

  type Result = ExcludeKeysStrict<Interface, string | number>

  assertType<Equals<Result, 'null'>>()
})
