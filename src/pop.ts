export type Pop<T extends unknown[]> =
  T extends [...infer U, unknown]
  ? U
  : never
