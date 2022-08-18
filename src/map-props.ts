export type MapProps<T, NewType> = {
  [Key in keyof T]: NewType
}
