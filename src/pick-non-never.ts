import { KeysExcludeByType } from './keys-exclude-by-type'

export type PickNonNever<T> = Pick<T, KeysExcludeByType<T, never>>
