import { OptionalKeys } from './optional-keys'

export type MapPropsExtendTypeToPartial<T extends object, Keys extends keyof T> = {
  [P in Exclude<keyof T, Keys | OptionalKeys<T>>]: T[P]
} & {
  [P in Keys | OptionalKeys<T>]?: T[P]
}
