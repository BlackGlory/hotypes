import { ExcludeKeysExtendType } from './exclude-keys-extend-type'

export type NonNullableKeys<T extends object> =
  ExcludeKeysExtendType<T, null | undefined>
