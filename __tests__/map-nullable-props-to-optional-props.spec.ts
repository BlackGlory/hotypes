import { assertType, Equals } from '@test/utils'
import { MapNullablePropsToOptionalProps } from '@src/map-nullable-props-to-optional-props'

test('MapNullablePropsToOptionalProps', () => {
  interface Interface {
    str: string
    nullableStr: string | null
    null: null
    undefined: undefined
    nullOrUndefined: null | undefined
  }

  type Result = MapNullablePropsToOptionalProps<Interface>

  // @ts-ignore
  assertType<Equals<Result, {
    str: string
    nullableStr?: string | undefined
    null?: undefined
    undefined?: undefined
    nullOrUndefined?: undefined
  }>>()
})
