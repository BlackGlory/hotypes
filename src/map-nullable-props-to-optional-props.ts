import { MapProps } from './map-props'
import { NonNullableKeys } from './non-nullable-keys'
import { NullableKeys } from './nullable-keys'

export type MapNullablePropsToOptionalProps<T extends object> =
  Pick<T, NonNullableKeys<T>>
& Partial<MapProps<null, undefined, Pick<T, NullableKeys<T>>>>
