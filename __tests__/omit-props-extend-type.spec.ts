import { assertType, Equals } from '@test/utils'
import { OmitPropsExtendType } from '@src/omit-props-extend-type'

test('OmitPropsExtendType<T, Type>', () => {
  interface Interface {
    str: string
    num: number
    strOrNumber: string | number
  }

  type Result = OmitPropsExtendType<Interface, string>

  assertType<Equals<Result, {
    num: number
  }>>()
})
