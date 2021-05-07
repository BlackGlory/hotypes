import { Equals } from './equals'

export type KeysByType<T extends object, Type> = {
  [P in keyof T]:
    Equals<T[P], Type> extends true
    ? P
    : never
}[keyof T]
