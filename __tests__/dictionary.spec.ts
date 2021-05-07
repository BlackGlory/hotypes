import { assertType, Equals } from '@test/utils'
import { Dictionary } from '@src/dictionary'

test('Dictionary<T> is { [key: string]: T }', () => {
  type Result = Dictionary<string>

  assertType<Equals<Result, { [key: string]: string }>>()
})
