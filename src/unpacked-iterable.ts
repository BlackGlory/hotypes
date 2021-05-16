export type UnpackedIterable<T> = T extends Iterable<infer U> ? U : never
