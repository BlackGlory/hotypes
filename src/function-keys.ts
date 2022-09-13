import { KeysByType } from './keys-by-type'

export type FunctionKeys<T> =
  KeysByType<T, (...args: any) => any>
