import { GetKeysByType } from './get-keys-by-type'

export type ExcludeKeysStrict<T extends object, Type> =
  Exclude<keyof T, GetKeysByType<T, Type>>
