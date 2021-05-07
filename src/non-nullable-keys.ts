import { ExcludeKeysExtendType } from './exclude-keys'

export type NonNullableKeys<T extends object> = ExcludeKeysExtendType<T, null | undefined>
