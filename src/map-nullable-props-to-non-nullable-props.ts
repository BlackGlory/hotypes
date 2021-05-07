import { NullableToNonNullable } from './exclude-nullable'
import { PickNonNever } from './pick-non-never'

export type MapNullablePropsToNonNullableProps<T extends object> =
  PickNonNever<{
    [P in keyof T]: NullableToNonNullable<T[P]>
  }>
