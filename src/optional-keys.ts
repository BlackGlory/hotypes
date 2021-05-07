import { KeysExtendType } from './keys-extend-type'

export type OptionalKeys<T extends object> = KeysExtendType<T, undefined>
