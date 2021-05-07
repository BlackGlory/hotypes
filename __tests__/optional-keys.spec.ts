import { assertType, Equals } from '@test/utils'
import { OptionalKeys } from '@src/optional-keys'

test('OptionalKeys<T> ', () => {
  interface Interface {
    a: string
    b?: string
    ab: string
  }

  type Result = OptionalKeys<Interface>

  assertType<Equals<Result, 'b'>>()
})
