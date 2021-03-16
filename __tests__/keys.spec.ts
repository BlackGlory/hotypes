import { assertType, Equals } from '@test/utils'
import { Keys } from '@src/keys'

test('Keys<T>', () => {
  interface Interface {
    str: string
    num: number
  }

  type Result = Keys<Interface>

  assertType<Equals<Result, 'str' | 'num'>>()
})

test('Keys<T, Type>', () => {
  interface Interface {
    str: string
    num: number
    strOrNumber: string | number
  }

  type Result = Keys<Interface, string>

  assertType<Equals<Result, 'str' | 'strOrNumber'>>()
})

test('Keys<T, Types>', () => {
  interface Interface {
    str: string
    num: number
    strOrNumber: string | number
    null: null
  }

  type Result = Keys<Interface, string | number>

  assertType<Equals<Result, 'str' | 'num' | 'strOrNumber'>>()
})
