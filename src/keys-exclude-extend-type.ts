import { KeysByType } from './keys-by-type'

export type KeysExcludeExtendType<T, Type> =
  Exclude<keyof T, KeysByType<T, Type>>
