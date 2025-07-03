export type Prettify<T> =
  T extends Function
? T
: {
    [Key in keyof T]: T[Key]
  } & {}
