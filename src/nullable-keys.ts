import { KeysByType } from './keys-by-type'

export type NullableKeys<T> = KeysByType<T, undefined | null>
