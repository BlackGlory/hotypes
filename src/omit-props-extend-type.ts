import { KeysByType } from './keys-by-type'

export type OmitPropsExtendType<T, Type> =
  Pick<T, Exclude<keyof T, KeysByType<T, Type>>>
