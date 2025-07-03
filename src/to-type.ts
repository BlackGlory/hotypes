export type ToType<T> =
  T extends Function
? T
: {
    [Key in keyof T]: ToType<T[Key]>
  }
