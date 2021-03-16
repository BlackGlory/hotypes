import { ExcludeKeysStrict } from './exclude-keys-strict'

export type PickNonNever<T extends object> = Pick<T, ExcludeKeysStrict<T, never>>
