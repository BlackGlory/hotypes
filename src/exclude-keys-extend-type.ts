import { GetKeysExtendType } from './get-keys-extend-type'

export type ExcludeKeysExtendType<T extends object, Type> =
  Exclude<keyof T, GetKeysExtendType<T, Type>>
