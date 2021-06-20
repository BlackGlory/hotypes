import { assertType, Equals } from '@test/utils'
import { ReplaceType } from '@src/replace-type'

describe('ReplaceType<T, OldType, NewType>', () => {
  test('type', () => {
    type Type = string | number

    type Result = ReplaceType<Type, string, boolean>

    assertType<Equals<Result, boolean | number>>()
  })

  test('union type', () => {
    type Type = string | number | boolean

    type Result = ReplaceType<Type, string | number, RegExp>

    assertType<Equals<Result, RegExp | boolean>>()
  })
})
