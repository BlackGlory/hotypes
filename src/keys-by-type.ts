import { Equals } from './equals'

export type KeysByType<T extends object, Type> = {
  [Key in keyof T]:
    Equals<T[Key], Type> extends true
    ? Key
    : never
}[keyof T]
