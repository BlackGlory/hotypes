import { OptionalKeys } from './optional-keys'

export type MapPropsExtendTypeToPartial<T extends object, Keys extends keyof T> = {
  [Key in Exclude<keyof T, Keys | OptionalKeys<T>>]: T[Key]
} & {
  [Key in Keys | OptionalKeys<T>]?: T[Key]
}
