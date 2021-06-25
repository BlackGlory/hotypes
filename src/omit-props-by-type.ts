import { KeysByType } from './keys-by-type'

export type OmitPropsByType<T, Type> =
  Pick<T, Exclude<keyof T, KeysByType<T, Type>>>
