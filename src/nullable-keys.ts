import { GetKeysExtendType } from './get-keys-extend-type'

export type NullableKeys<T extends object> = GetKeysExtendType<T, undefined | null>
