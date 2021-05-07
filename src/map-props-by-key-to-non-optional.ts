import { OptionalKeys } from './optional-keys'

export type MapPropsByKeyToNonOptional<T, Keys extends keyof T> = {
  [Key in Exclude<keyof T, OptionalKeys<T> | Keys>]: T[Key]
} & {
  [Key in OptionalKeys<T>]?: T[Key]
} & {
  [Key in Keys]-?: T[Key]
}
