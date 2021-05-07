import { KeysExtendType } from './keys-extend-type'

export type OptionalKeys<T extends object> =
  Exclude<
    KeysExtendType<T, undefined>
  , undefined
  >
