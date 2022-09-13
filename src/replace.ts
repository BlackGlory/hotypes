export type Replace<T, OldType, NewType> =
| Exclude<T, OldType>
| NewType
