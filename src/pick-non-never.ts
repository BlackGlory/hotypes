import { KeysExcludeByType } from './keys-exclude-by-type'

export type PickNonNever<T extends object> = Pick<T, KeysExcludeByType<T, never>>
