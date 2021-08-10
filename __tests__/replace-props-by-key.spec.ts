import { assertType, Equals } from '@test/utils'
import { ReplacePropsByKey } from '@src/replace-props-by-key'

describe('ReplacePropsByKey<T, Keys, OldKey, NewKey>', () => {
  test('type', () => {
    interface Interface {
      target: string | number
      other: string | number
    }

    type Result = ReplacePropsByKey<Interface, 'target', string, boolean>

    assertType<Equals<Result, {
      target: boolean | number
    , other: string | number
    }>>()
  })

  test('union type', () => {
    interface Interface {
      target: string | number | boolean
      other: string | number
    }

    type Result = ReplacePropsByKey<Interface, 'target', string | number, RegExp>

    assertType<Equals<Result, {
      target: RegExp | boolean
      other: string | number
    }>>()
  })

  test('multiple keys', () => {
    interface Interface {
      target1: string | number | boolean
      target2: string | number | null
      other: string | number
    }

    type Result = ReplacePropsByKey<
      Interface
    , 'target1' | 'target2'
    , string | number
    , RegExp
    >

    assertType<Equals<Result, {
      target1: RegExp | boolean
      target2: RegExp | null
      other: string | number
    }>>()
  })
})
