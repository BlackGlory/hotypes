export type NonCallable<T> = {
  [Key in keyof T]: T[Key]
}
