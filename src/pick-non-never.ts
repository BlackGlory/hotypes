import { ExcludePropsByType } from './exclude-keys-strict'

export type PickNonNever<T extends object> = Pick<T, ExcludePropsByType<T, never>>
