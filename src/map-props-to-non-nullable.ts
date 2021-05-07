import { NonNullable } from './non-nullable'
import { PickNonNever } from './pick-non-never'

export type MapPropsToNonNullable<T> =
  PickNonNever<{
    [Key in keyof T]: NonNullable<T[Key]>
  }>
