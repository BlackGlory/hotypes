import { assertType, Equals } from '@test/utils'
import { MapPropsByType } from '@src/map-props-by-type'

describe('MapPropsByType<T, OldType, NewType>', () => {
  test('type', () => {
    interface Interface {
      str: string
      num: number
      strOrNum: string | number
    }

    type Result = MapPropsByType<Interface, string, number>

    assertType<Equals<Result, {
      str: number
      num: number
      strOrNum: string | number
    }>>()
  })

  test('union type', () => {
    interface Interface {
      str: string
      num: number
      strOrNum: string | number
    }

    type Result = MapPropsByType<Interface, string | number, number>

    assertType<Equals<Result, {
      str: string
      num: number
      strOrNum: number
    }>>()
  })
})
