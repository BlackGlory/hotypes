import { assertType, Equals } from '@test/utils'
import { Dictionary } from '@src/dictionary'

test('Dictionary<T> is { [key: string]: T }', () => {
  assertType<Equals<Dictionary<string>, { [key: string]: string }>>()
})
