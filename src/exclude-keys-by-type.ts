import { KeysByType } from './keys-by-type'

export type ExcludeKeysByType<T extends object, Type> =
  Exclude<keyof T, KeysByType<T, Type>>
