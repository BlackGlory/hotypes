import { KeysByType } from './keys-by-type'

export type OptionalKeys<T> =
  Exclude<
    KeysByType<T, undefined>
  , undefined
  >
