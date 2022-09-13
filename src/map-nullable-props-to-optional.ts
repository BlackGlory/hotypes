import { MapPropsByType } from './map-props-by-type'
import { NonNullableKeys } from './non-nullable-keys'
import { NullableKeys } from './nullable-keys'

export type MapNullablePropsToOptional<T> =
  Pick<T, NonNullableKeys<T>>
& Partial<
    MapPropsByType<
      Pick<T, NullableKeys<T>>
    , null
    , undefined
    >
  >
