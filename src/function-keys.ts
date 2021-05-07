import { KeysExtendType } from './keys-extend-type'

export type FunctionKeys<T> =
  KeysExtendType<T, (...args: any) => any>
