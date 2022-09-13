import { assertType, Equals } from '@test/utils'
import { OmitPropsByExactType } from '@src/omit-props-by-exact-type'

test('OmitPropsByExactType<T, Type>', () => {
  interface Interface {
    str: string
    num: number
    strOrNumber: string | number
  }

  type Result = OmitPropsByExactType<Interface, string>

  assertType<Equals<Result, {
    num: number
    strOrNumber: string | number
  }>>()
})
