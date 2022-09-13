import { KeysByExactType } from './keys-by-exact-type'

export type KeysExcludeByType<T, Type> =
  Exclude<keyof T, KeysByExactType<T, Type>>
