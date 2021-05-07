import { OptionalKeys } from './optional-keys'

export type RequiredKeys<T extends object, Keys extends keyof T> = {
  [Key in Exclude<keyof T, OptionalKeys<T> | Keys>]: T[Key]
} & {
  [Key in OptionalKeys<T>]?: T[Key]
} & {
  [Key in Keys]-?: T[Key]
}
