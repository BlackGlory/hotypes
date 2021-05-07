import { Equals } from './equals'

export type MapPropsByType<T, OldType, NewType> = {
  [P in keyof T]:
    Equals<T[P], OldType> extends true
    ? NewType
    : T[P]
}
