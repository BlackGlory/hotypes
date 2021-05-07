import { assertType, Equals } from '@test/utils'
import { ExcludeKeysExtendType } from '@src/exclude-keys-extend-type'

test('ExcludeKeysExtendType<T, Type>', () => {
  interface Interface {
    str: string
    num: number
    strOrNumber: string | number
  }

  type Result = ExcludeKeysExtendType<Interface, string>

  assertType<Equals<Result, 'num'>>()
})

test('ExcludeKeysExtendType<T, Types>', () => {
  interface Interface {
    str: string
    num: number
    strOrNumber: string | number
    null: null
  }

  type Result = ExcludeKeysExtendType<Interface, string | number>

  assertType<Equals<Result, 'null'>>()
})
