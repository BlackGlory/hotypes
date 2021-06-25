import { KeysExtendType } from './keys-extend-type'

export type OmitPropsExtendType<T, Type> =
  Pick<T, Exclude<keyof T, KeysExtendType<T, Type>>>
