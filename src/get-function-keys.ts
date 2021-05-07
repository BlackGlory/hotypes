import { GetKeysExtendType } from './get-keys-extend-type'

export type GetFunctionKeys<T extends object> =
  GetKeysExtendType<T, (...args: any) => any>
