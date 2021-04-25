import { Keys } from './keys'

export type OptionalKeys<T extends object> = Keys<T, undefined>
