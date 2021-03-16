export function assertType<T extends true>() {}
export function assertNotType<T extends false>() {}

// very magic, read https://github.com/microsoft/TypeScript/issues/27024
export type Equals<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends (<T>() => T extends Y ? 1 : 2)
  ? true
  : false

export type Not<T extends boolean> =
  T extends true
  ? false
  : true

export type NotEqual<X, Y> = Not<Equals<X, Y>>
