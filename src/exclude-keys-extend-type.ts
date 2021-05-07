import { KeysExtendType } from './keys-extend-type'

export type ExcludeKeysExtendType<T extends object, Type> =
  Exclude<keyof T, KeysExtendType<T, Type>>
