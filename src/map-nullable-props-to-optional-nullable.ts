import { NonNullableKeys } from './non-nullable-keys'
import { NullableKeys } from './nullable-keys'

export type MapNullablePropsToOptionalNullable<T> =
  Pick<T, NonNullableKeys<T>>
& Partial<Pick<T, NullableKeys<T>>>
