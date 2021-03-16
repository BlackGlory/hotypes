export type UnpackedArrayLike<T> =
  T extends ArrayLike<infer U>
  ? U
  : never
