import { ExcludeKeys } from './exclude-keys'

export type NonNullableKeys<T extends object> = ExcludeKeys<T, null | undefined>
