import { assertType, Equals } from '@test/utils'
import { RequiredKeys } from '@src/required-keys'

test('RequiredKeys<T, Keys>', () => {
  interface Interface {
    a: string
    b?: string
    ab?: string
  }

  type Result = RequiredKeys<Interface, 'ab'>

  assertType<
    Equals<
      Result
    , { a: string } & { b?: string; ab?: string } & { ab: string }
    >
  >()
})
