export type Keys<T extends object, Type = any> = {
  [P in keyof T]:
    Type extends T[P]
    ? P
    : never
}[keyof T]
