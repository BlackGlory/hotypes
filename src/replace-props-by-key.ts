import { Replace } from './replace'

export type ReplacePropsByKey<T, Keys, OldType, NewType> = {
  [Key in keyof T]: 
    Key extends Keys
    ? Replace<T[Key], OldType, NewType>
    : T[Key]
}
