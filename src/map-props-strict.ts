export type MapPropsStrict<OldType, NewType, T> = {
  [P in keyof T]:
    T[P] extends OldType
    ? NewType
    : T[P]
}
