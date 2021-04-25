import { assertType, Equals } from '@test/utils'
import { PartialKeys } from '@src/partial-keys'

test('PartialKeys<T, Keys>', () => {
  interface Interface {
    str: string
  }

  type Result = PartialKeys<Interface, 'str'>

  assertType<Equals<Result, {
    str: string | undefined
  }>>()
})
