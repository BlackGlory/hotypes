import { UnpackedArray } from './unpacked-array'

export type Flatten<T extends unknown[]> =
  T extends [infer First, ...infer Rest]
  ? [
      ...(
        First extends unknown[]
        ? [UnpackedArray<First>]
        : [First]
        )
    , ...Flatten<Rest>
    ]
  : T
