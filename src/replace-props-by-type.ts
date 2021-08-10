import { ReplaceType } from './replace-type'
import { KeysExtendType } from './keys-extend-type'

export type ReplacePropsByType<T, OldType, NewType> = {
  [Key in keyof T]: 
    Key extends KeysExtendType<T, OldType>
    ? ReplaceType<T[Key], OldType, NewType>
    : T[Key]
}
