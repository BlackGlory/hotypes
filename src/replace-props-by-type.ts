import { ReplaceType } from './replace-type'
import { KeysByType } from './keys-by-type'

export type ReplacePropsByType<T, OldType, NewType> = {
  [Key in keyof T]: 
    Key extends KeysByType<T, OldType>
    ? ReplaceType<T[Key], OldType, NewType>
    : T[Key]
}
