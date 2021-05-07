import { GetKeysExtendType } from './get-keys-extend-type'

export type OptionalKeys<T extends object> = GetKeysExtendType<T, undefined>
