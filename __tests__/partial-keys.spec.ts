import { assertType, Equals } from '@test/utils'
import { PartialKeys } from '@src/partial-keys'

test('PartialKeys<T, Keys>', () => {
  interface Interface {
    a: string
    ab: string
  }

  type Result = PartialKeys<Interface, 'a'>

  assertType<Equals<Result, { ab: string } & { a?: string }>>()
})
