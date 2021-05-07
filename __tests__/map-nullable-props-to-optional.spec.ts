import { assertType, Equals } from '@test/utils'
import { MapNullablePropsToOptional } from '@src/map-nullable-props-to-optional'

test('MapNullablePropsToOptional', () => {
  interface Interface {
    str: string
    nullableStr: string | null
    null: null
    undefined: undefined
    nullOrUndefined: null | undefined
  }

  type Result = MapNullablePropsToOptional<Interface>

  // @ts-ignore
  assertType<Equals<Result, {
    str: string
    nullableStr?: string | undefined
    null?: undefined
    undefined?: undefined
    nullOrUndefined?: undefined
  }>>()
})
