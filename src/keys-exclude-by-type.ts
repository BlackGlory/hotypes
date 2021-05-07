import { KeysByType } from './keys-by-type'

export type KeysExcludeByType<T, Type> =
  Exclude<keyof T, KeysByType<T, Type>>
