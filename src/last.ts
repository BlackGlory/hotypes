import { Head } from './head'
import { Tail } from './tail'

export type Last<T extends unknown[]> = {
  0: Head<T>
  1: Last<Tail<T>>
}[HasTail<T> extends true ? 1 : 0]

type HasTail<T extends unknown[]> =
  T extends [] | [unknown]
  ? false
  : true
