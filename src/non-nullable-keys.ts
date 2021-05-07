import { KeysExcludeExtendType } from './keys-exclude-extend-type'

export type NonNullableKeys<T extends object> =
  KeysExcludeExtendType<T, null | undefined>
