import { assertType, Equals } from '@test/utils'
import { MapNullablePropsToNonNullableProps } from '@src/map-nullable-props-to-non-nullable-props'

test('MapNullablePropsToNonNullableProps', () => {
  interface Interface {
    str: string
    nullableStr: string | null
    null: null
    undefined: undefined
    nullOrUndefined: null | undefined
  }

  type Result = MapNullablePropsToNonNullableProps<Interface>

  assertType<Equals<Result, {
    str: string
    nullableStr: string
  }>>()
})
