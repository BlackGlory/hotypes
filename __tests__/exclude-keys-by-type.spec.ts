import { assertType, Equals } from '@test/utils'
import { ExcludeKeysByType } from '@src/exclude-keys-by-type'

test('ExcludeKeysByType<T, Type>', () => {
  interface Interface {
    str: string
    num: number
    strOrNumber: string | number
  }

  type Result = ExcludeKeysByType<Interface, string>

  assertType<Equals<Result, 'num' | 'strOrNumber'>>()
})

test('ExcludeKeysByType<T, Type>', () => {
  interface Interface {
    str: string
    num: number
    strOrNumber: string | number
    null: null
  }

  type Result = ExcludeKeysByType<Interface, string | number>

  assertType<Equals<Result, 'str' | 'num' | 'null'>>()
})
