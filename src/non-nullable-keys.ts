import { KeysExcludeExtendType } from './keys-exclude-extend-type'

export type NonNullableKeys<T> =
  KeysExcludeExtendType<T, null | undefined>
