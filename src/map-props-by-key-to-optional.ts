import { OptionalKeys } from './optional-keys'

export type MapPropsByKeyToOptional<T, Keys extends keyof T> =
  Pick<T, Exclude<keyof T, Keys | OptionalKeys<T>>>
& Partial<Pick<T, Keys | OptionalKeys<T>>>
