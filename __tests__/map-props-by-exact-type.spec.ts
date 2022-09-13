import { assertType, Equals } from '@test/utils'
import { MapPropsByExactType } from '@src/map-props-by-exact-type'

describe('MapPropsByExactType<T, OldType, NewType>', () => {
  test('type', () => {
    interface Interface {
      str: string
      num: number
      strOrNum: string | number
    }

    type Result = MapPropsByExactType<Interface, string, number>

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

    type Result = MapPropsByExactType<Interface, string | number, number>

    assertType<Equals<Result, {
      str: string
      num: number
      strOrNum: number
    }>>()
  })
})
