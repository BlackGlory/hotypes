export type WithDefault<T, Default> =
  T extends undefined | null
  ? NonNullable<T> | Default
  : T
