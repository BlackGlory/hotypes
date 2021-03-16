import { assertType, Equals } from '@test/utils'
import { ExcludeKeys } from '@src/exclude-keys'

test('ExcludeKeys<T, Type>', () => {
  interface Interface {
    str: string
    num: number
    strOrNumber: string | number
  }

  type Result = ExcludeKeys<Interface, string>

  assertType<Equals<Result, 'num'>>()
})

test('ExcludeKeys<T, Types>', () => {
  interface Interface {
    str: string
    num: number
    strOrNumber: string | number
    null: null
  }

  type Result = ExcludeKeys<Interface, string | number>

  assertType<Equals<Result, 'null'>>()
})
