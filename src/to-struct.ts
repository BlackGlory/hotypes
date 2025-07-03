export type ToStruct<T> =
  T extends Function
? T
: {
    [Key in keyof T]: ToStruct<T[Key]>
  }
