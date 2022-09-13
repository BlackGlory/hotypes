import { KeysExcludeByExactType } from './keys-exclude-by-exact-type'

export type PickNonNever<T> = Pick<T, KeysExcludeByExactType<T, never>>
