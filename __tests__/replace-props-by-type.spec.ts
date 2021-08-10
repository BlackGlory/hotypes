import { assertType, Equals } from '@test/utils'
import { ReplacePropsByType } from '@src/replace-props-by-type'

describe('ReplacePropsByType<T, OldType, NewType>', () => {
  test('type', () => {
    interface Interface {
      type: string | number
      other: Symbol
    }

    type Result = ReplacePropsByType<Interface, string, boolean>

    assertType<Equals<Result, {
      type: boolean | number
    , other: Symbol
    }>>()
  })

  test('union type', () => {
    interface Interface {
      type: string | number | boolean
      other: Symbol
    }

    type Result = ReplacePropsByType<Interface, string | number, RegExp>

    assertType<Equals<Result, {
      type: RegExp | boolean
      other: Symbol
    }>>()
  })
})
