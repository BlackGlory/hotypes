export type UnpackedPromiseLike<T> = T extends PromiseLike<infer U> ? U : never
