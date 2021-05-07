import { MapPropsExtendType } from './map-props-extend-type'
import { NonNullableKeys } from './non-nullable-keys'
import { NullableKeys } from './nullable-keys'

export type MapNullablePropsToOptional<T> =
  Pick<T, NonNullableKeys<T>>
& Partial<MapPropsExtendType<null, undefined, Pick<T, NullableKeys<T>>>>
