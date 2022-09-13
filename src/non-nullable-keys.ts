import { KeysExcludeByType } from './keys-exclude-by-type'

export type NonNullableKeys<T> =
  KeysExcludeByType<T, null | undefined>
