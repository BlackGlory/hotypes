import { assertType, Equals } from '@test/utils'
import { NonCallable } from '@src/non-callable'

test('NonCallable', () => {
  interface Interface {
    (): Interface
    new (): Interface
    prop: string
  }

  type Result = NonCallable<Interface>

  assertType<Equals<Result, {
    prop: string
  }>>()
})
