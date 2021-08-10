export type MapPropsByKey<T, Keys, NewType> = {
  [Key in keyof T]: 
    Key extends Keys
    ? NewType
    : T[Key]
}
