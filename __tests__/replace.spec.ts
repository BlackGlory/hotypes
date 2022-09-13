import { assertType, Equals } from '@test/utils'
import { Replace } from '@src/replace'

describe('Replace<T, OldType, NewType>', () => {
  test('type', () => {
    type Type = string | number

    type Result = Replace<Type, string, boolean>

    assertType<Equals<Result, boolean | number>>()
  })

  test('union type', () => {
    type Type = string | number | boolean

    type Result = Replace<Type, string | number, RegExp>

    assertType<Equals<Result, RegExp | boolean>>()
  })
})
