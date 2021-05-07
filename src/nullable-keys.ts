import { KeysExtendType } from './keys-extend-type'

export type NullableKeys<T extends object> = KeysExtendType<T, undefined | null>
