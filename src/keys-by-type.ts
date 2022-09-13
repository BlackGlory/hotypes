export type KeysByType<T, Type> = {
  [Key in keyof T]:
    T[Key] extends Type
    ? Key
    : Type extends T[Key]
      ? Key
      : never
}[keyof T]
