import { KeysExtendType } from './keys-extend-type'

export type OptionalKeys<T> =
  Exclude<
    KeysExtendType<T, undefined>
  , undefined
  >
