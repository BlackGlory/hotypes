import { ReplaceType } from './replace-type'

export type ReplacePropsByKey<T, Keys, OldType, NewType> = {
  [Key in keyof T]: 
    Key extends Keys
    ? ReplaceType<T[Key], OldType, NewType>
    : T[Key]
}
