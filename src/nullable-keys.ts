import { KeysExtendType } from './keys-extend-type'

export type NullableKeys<T> = KeysExtendType<T, undefined | null>
