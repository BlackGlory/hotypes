import { Mixin } from './mixin'

export type MixinAll<Tuple extends any[], Result = {}> =
  Tuple extends [infer First, ...infer Rest]
  ? MixinAll<Rest, Mixin<Result, First>>
  : Result
