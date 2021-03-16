import { assertType, Equals } from '@test/utils'
import { PickNonNever } from '@src/pick-non-never'

test('PickNonNever<T>', () => {
  interface Interface {
    str: string
    never: never
    strOrNever: string | never
  }

  type Result = PickNonNever<Interface>

  assertType<Equals<Result, {
    str: string
    strOrNever: string | never
  }>>()
})
