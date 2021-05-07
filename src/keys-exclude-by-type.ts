import { KeysByType } from './keys-by-type'

export type KeysExcludeByType<T extends object, Type> =
  Exclude<keyof T, KeysByType<T, Type>>
