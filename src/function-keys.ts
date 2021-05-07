import { KeysExtendType } from './keys-extend-type'

export type FunctionKeys<T extends object> =
  KeysExtendType<T, (...args: any) => any>
