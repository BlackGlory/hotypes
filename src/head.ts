export type Head<T extends unknown[]> =
  T extends [infer U, ...unknown[]]
  ? U
  : never
