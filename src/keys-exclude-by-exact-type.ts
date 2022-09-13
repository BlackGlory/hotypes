import { KeysByExactType } from './keys-by-exact-type'

export type KeysExcludeByExactType<T, Type> =
  Exclude<keyof T, KeysByExactType<T, Type>>
