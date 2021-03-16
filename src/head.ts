export type Head<T extends unknown[]> =
  T extends [unknown, ...unknown[]]
  ? T[0]
  : never
