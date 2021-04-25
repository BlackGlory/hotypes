export type PartialKeys<T extends object, Keys extends keyof T> = {
  [P in Exclude<keyof T, Keys>]: T[P]
} & {
  [P in Keys]?: T[P]
}
