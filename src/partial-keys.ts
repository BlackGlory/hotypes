import { OptionalKeys } from './optional-keys'

export type PartialKeys<T extends object, Keys extends keyof T> = {
  [P in Exclude<keyof T, Keys | OptionalKeys<T>>]: T[P]
} & {
  [P in Keys | OptionalKeys<T>]?: T[P]
}
