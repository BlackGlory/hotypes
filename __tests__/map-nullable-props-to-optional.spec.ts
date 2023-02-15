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

  assertType<Equals<Result['str'], string>>()
  assertType<Equals<Result['nullableStr'], string | undefined>>()
  assertType<Equals<Result['null'], undefined>>()
  assertType<Equals<Result['undefined'], undefined>>()
  assertType<Equals<Result['nullOrUndefined'], undefined>>()
  // @ts-ignore
  assertType<Equals<Result, {
    str: string
    nullableStr?: string
    null?: undefined
    undefined?: undefined
    nullOrUndefined?: undefined
  }>>()
})
