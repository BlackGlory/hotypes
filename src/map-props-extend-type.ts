export type MapPropsExtendType<T, OldType, NewType> = {
  [Key in keyof T]:
    T[Key] extends OldType
    ? Exclude<T[Key], OldType> | NewType
    : OldType extends T[Key]
      ? Exclude<T[Key], OldType> | NewType
      : T[Key]
}
