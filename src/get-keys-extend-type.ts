export type GetKeysExtendType<T extends object, Type> = {
  [P in keyof T]:
    Type extends T[P]
    ? P
    : never
}[keyof T]