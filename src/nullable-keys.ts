import { Keys } from './keys'

export type NullableKeys<T extends object> = Keys<T, undefined | null>
