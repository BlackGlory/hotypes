import { Keys } from './keys'

export type GetFunctionKeys<T extends object> = Keys<T, (...args: any) => any>
