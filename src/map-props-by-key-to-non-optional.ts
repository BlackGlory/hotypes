import { OptionalKeys } from './optional-keys'

export type MapPropsByKeyToNonOptional<T, Keys extends keyof T> =
  Pick<T, Exclude<keyof T, OptionalKeys<T> | Keys>>
& Partial<Pick<T, OptionalKeys<T>>>
& Required<Pick<T, Keys>>
