import { assertType, Equals } from '@test/utils'
import { MapPropsExtendType } from '@src/map-props-extend-type'

describe('MapPropsExtendType<T, OldType, NewType>', () => {
  test('type', () => {
    interface Interface {
      str: string
      num: number
      strOrNum: string | number
      null: null
    }

    type Result = MapPropsExtendType<Interface, string, number>

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

    type Result = MapPropsExtendType<Interface, string | number, number>

    assertType<Equals<Result, {
      str: number
      num: number
      strOrNum: number
      null: null
    }>>()
  })
})
