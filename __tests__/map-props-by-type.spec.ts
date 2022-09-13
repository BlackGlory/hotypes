import { assertType, Equals } from '@test/utils'
import { MapPropsByType } from '@src/map-props-by-type'

describe('MapPropsByType<T, OldType, NewType>', () => {
  test('type', () => {
    interface Interface {
      str: string
      num: number
      strOrNum: string | number
      null: null
    }

    type Result = MapPropsByType<Interface, string, number>

    assertType<Equals<Result, {
      str: number
      num: number
      strOrNum: number
      null: null
    }>>()
  })

  test('union type', () => {
    interface Interface {
      str: string
      num: number
      strOrNum: string | number
      null: null
    }

    type Result = MapPropsByType<Interface, string | number, number>

    assertType<Equals<Result, {
      str: number
      num: number
      strOrNum: number
      null: null
    }>>()
  })
})
