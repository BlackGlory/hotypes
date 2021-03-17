export type MapProps<OldType, NewType, T> = {
  [P in keyof T]:
    T[P] extends OldType
    ? Exclude<T[P], OldType> | NewType
    : OldType extends T[P]
      ? Exclude<T[P], OldType> | NewType
      : T[P]
}
