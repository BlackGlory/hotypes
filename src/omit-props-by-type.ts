import { KeysByExactType } from './keys-by-exact-type'

export type OmitPropsByType<T, Type> =
  Pick<T, Exclude<keyof T, KeysByExactType<T, Type>>>
