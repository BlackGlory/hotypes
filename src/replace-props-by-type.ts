import { Replace } from './replace'
import { KeysByType } from './keys-by-type'

export type ReplacePropsByType<T, OldType, NewType> = {
  [Key in keyof T]: 
    Key extends KeysByType<T, OldType>
    ? Replace<T[Key], OldType, NewType>
    : T[Key]
}
