import { assertType, Equals } from '@test/utils'
import { GetKeysByType } from '@src/get-keys-by-type'

test('GetKeysByType<T, Type>', () => {
  interface Interface {
    str: string
    num: number
    strOrNumber: string | number
  }

  type Result = GetKeysByType<Interface, string>

  assertType<Equals<Result, 'str'>>()
})

test('GetKeysByType<T, Types>', () => {
  interface Interface {
    str: string
    num: number
    strOrNumber: string | number
    null: null
  }

  type Result = GetKeysByType<Interface, string | number>

  assertType<Equals<Result, 'strOrNumber'>>()
})
