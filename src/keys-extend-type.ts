export type KeysExtendType<T extends object, Type> = {
  [Key in keyof T]:
    Type extends T[Key]
    ? Key
    : never
}[keyof T]
