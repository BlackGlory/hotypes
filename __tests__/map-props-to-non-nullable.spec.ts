import { assertType, Equals } from '@test/utils'
import { MapPropsToNonNullable } from '@src/map-props-to-non-nullable'

test('MapPropsToNonNullable', () => {
  interface Interface {
    str: string
    nullableStr: string | null
    null: null
    undefined: undefined
    nullOrUndefined: null | undefined
  }

  type Result = MapPropsToNonNullable<Interface>

  assertType<Equals<Result, {
    str: string
    nullableStr: string
  }>>()
})
