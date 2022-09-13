export type ReplaceType<T, OldType, NewType> =
| Exclude<T, OldType>
| NewType
