import { Keys } from './keys'

export type ExcludeKeys<T extends object, Type> = Exclude<keyof T, Keys<T, Type>>
