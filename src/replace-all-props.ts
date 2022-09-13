export type ReplaceAllProps<T, NewType> = {
  [Key in keyof T]: NewType
}
