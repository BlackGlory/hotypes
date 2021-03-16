export type First<T extends unknown[]> =
  T extends [infer R, ...unknown[]]
  ? R
  : never
