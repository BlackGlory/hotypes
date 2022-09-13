import { Equals } from './equals'

export type MapPropsByExactType<T, OldType, NewType> = {
  [Key in keyof T]:
    Equals<T[Key], OldType> extends true
    ? NewType
    : T[Key]
}
