import { KeysExtendType } from './keys-extend-type'

export type KeysExcludeExtendType<T extends object, Type> =
  Exclude<keyof T, KeysExtendType<T, Type>>
