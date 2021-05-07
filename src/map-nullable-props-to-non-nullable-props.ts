import { NonNullable } from './non-nullable'
import { PickNonNever } from './pick-non-never'

export type MapNullablePropsToNonNullableProps<T extends object> =
  PickNonNever<{
    [P in keyof T]: NonNullable<T[P]>
  }>
