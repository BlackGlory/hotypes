export type UnpackedAsyncIterable<T> = T extends AsyncIterable<infer U> ? U : never
