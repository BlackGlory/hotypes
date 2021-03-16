export type KeysStrict<T extends object, Type = any> = {
  [P in keyof T]:
    T[P] extends Type
    ? P
    : never
}[keyof T]
