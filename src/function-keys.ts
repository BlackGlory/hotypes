import { GetKeysExtendType } from './get-keys-extend-type'

export type FunctionKeys<T extends object> =
  GetKeysExtendType<T, (...args: any) => any>
