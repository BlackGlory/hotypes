import { KeysExtendType } from './keys-extend-type'

export type KeysExcludeExtendType<T, Type> =
  Exclude<keyof T, KeysExtendType<T, Type>>
