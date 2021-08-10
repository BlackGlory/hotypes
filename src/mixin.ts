export type Mixin<Base, Other> =
  Pick<Base, Exclude<keyof Base, keyof Other>>
& Other
