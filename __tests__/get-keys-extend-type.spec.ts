import { assertType, Equals } from '@test/utils'
import { GetKeysExtendType } from '@src/get-keys-extend-type'

test('GetKeysExtendType<T, Type>', () => {
  interface Interface {
    str: string
    num: number
    strOrNumber: string | number
  }

  type Result = GetKeysExtendType<Interface, string>

  assertType<Equals<Result, 'str' | 'strOrNumber'>>()
})

test('GetKeysExtendType<T, Types>', () => {
  interface Interface {
    str: string
    num: number
    strOrNumber: string | number
    null: null
  }

  type Result = GetKeysExtendType<Interface, string | number>

  assertType<Equals<Result, 'str' | 'num' | 'strOrNumber'>>()
})
