import { assertType, Equals } from '@test/utils'
import { PartialKeys } from '@src/partial-keys'

test('PartialKeys<T, Keys>', () => {
  interface Interface {
    a: string
    b?: string
    ab: string
  }

  type Result = PartialKeys<Interface, 'ab'>

  assertType<
    Equals<
      Result
    , { a: string } & { b?: string; ab?: string }
    >
  >()
})
