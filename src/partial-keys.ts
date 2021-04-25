export type PartialKeys<T extends object, Keys> = {
  [P in keyof T]:
    P extends Keys
    ? T[P] | undefined
    : T[P]
}
