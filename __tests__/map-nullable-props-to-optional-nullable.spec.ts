import { assertType, Equals } from '@test/utils'
import { MapNullablePropsToOptionalNullable } from '@src/map-nullable-props-to-optional-nullable'

test('MapNullablePropsToOptionalNullable', () => {
  interface Interface {
    str: string
    nullableStr: string | null
    null: null
    undefined: undefined
    nullOrUndefined: null | undefined
  }

  type Result = MapNullablePropsToOptionalNullable<Interface>

  // @ts-ignore
  assertType<Equals<Result, {
    str: string
    nullableStr?: string | null
    null?: null
    undefined?: undefined
    nullOrUndefined?: null
  }>>()
})
