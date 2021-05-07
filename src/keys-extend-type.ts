export type KeysExtendType<T, Type> = {
  [Key in keyof T]:
    Type extends T[Key]
    ? Key
    : never
}[keyof T]
