import { KeysStrict } from './keys-strict'

export type ExcludeKeysStrict<T extends object, Type> =
  Exclude<keyof T, KeysStrict<T, Type>>
