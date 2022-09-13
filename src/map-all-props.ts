export type MapAllProps<T, NewType> = {
  [Key in keyof T]: NewType
}
