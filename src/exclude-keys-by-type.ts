import { GetKeysByType } from './get-keys-by-type'

export type ExcludeKeysByType<T extends object, Type> =
  Exclude<keyof T, GetKeysByType<T, Type>>
