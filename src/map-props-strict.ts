import { Equals } from './equals'

export type MapPropsStrict<OldType, NewType, T> = {
  [P in keyof T]:
    Equals<T[P], OldType> extends true
    ? NewType
    : T[P]
}
