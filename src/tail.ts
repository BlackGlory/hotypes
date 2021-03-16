export type Tail<T extends unknown[]> =
  T extends [unknown, ...infer U]
  ? U
  : never
