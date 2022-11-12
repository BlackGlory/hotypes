export type FlattenDeep<T extends unknown[]> =
  T extends [infer First, ...infer Rest]
  ? [
      ...(
        First extends unknown[]
        ? FlattenDeep<First>
        : [First]
      )
    , ...FlattenDeep<Rest>
    ]
  : T
