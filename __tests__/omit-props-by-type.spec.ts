import { assertType, Equals } from '@test/utils'
import { OmitPropsByType } from '@src/omit-props-by-type'

test('OmitPropsByType<T, Type>', () => {
  interface Interface {
    str: string
    num: number
    strOrNumber: string | number
  }

  type Result = OmitPropsByType<Interface, string>

  assertType<Equals<Result, {
    num: number
  }>>()
})
