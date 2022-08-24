export type Mixin<Base, Other> = {
  [Key in keyof (Base & Other)]:
    Key extends keyof Other ? Other[Key]
  : Key extends keyof Base ? Base[Key]
  : never
}
