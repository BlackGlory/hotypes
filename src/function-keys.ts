import { Keys } from './keys'

export type FunctionKeys<T extends object> = Keys<T, (...args: any) => unknown>
