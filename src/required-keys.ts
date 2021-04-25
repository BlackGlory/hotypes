import { OptionalKeys } from './optional-keys'

export type RequiredKeys<T extends object, Keys extends keyof T> = {
  [P in Exclude<keyof T, OptionalKeys<T> | Keys>]: T[P]
} & {
  [P in OptionalKeys<T>]?: T[P]
} & {
  [P in Keys]-?: T[P]
}
