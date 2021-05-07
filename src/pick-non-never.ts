import { ExcludeKeysByType } from './exclude-keys-by-type'

export type PickNonNever<T extends object> = Pick<T, ExcludeKeysByType<T, never>>
