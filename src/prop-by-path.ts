export type PropByPath<T extends object, Path extends PropertyKey[]> =
  Path extends [infer First, ...infer Rest]
  ? (
      First extends keyof T
      ? (
          T[First] extends object
          ? (
              Rest extends PropertyKey[]
              ? PropByPath<T[First], Rest>
              : never
            )
          : T[First]
        )
      : undefined
    )
  : T
