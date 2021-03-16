export type MapProps<OldType, NewType, T> = {
  [P in keyof T]:
    OldType extends T[P]
    ? Exclude<T[P], OldType> | NewType
    : T[P]
}
