import { Keys } from './keys'

export type ExcludeKeysExtendType<T extends object, Type> =
  Exclude<keyof T, Keys<T, Type>>
