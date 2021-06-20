import { ReplaceType } from './replace-type'

export type ReplacePropsByType<T, OldType, NewType> = {
  [Key in keyof T]: ReplaceType<T[Key], OldType, NewType>
}
