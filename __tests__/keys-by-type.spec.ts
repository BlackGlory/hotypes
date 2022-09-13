import { assertType, Equals } from '@test/utils'
import { KeysByType } from '@src/keys-by-type'

test('KeysByType<T, Type>', () => {
  interface Interface {
    str: string
    num: number
    strOrNumber: string | number
  }

  type Result = KeysByType<Interface, string>

  assertType<Equals<Result, 'str' | 'strOrNumber'>>()
})

test('KeysByType<T, Types>', () => {
  interface Interface {
    str: string
    num: number
    strOrNumber: string | number
    null: null
  }

  type Result = KeysByType<Interface, string | number>

  assertType<Equals<Result, 'str' | 'num' | 'strOrNumber'>>()
})
