import { assertType, Equals } from '@test/utils'
import { MapProps } from '@src/map-props'

describe('MapProps<OldType, NewType, T>', () => {
  test('type', () => {
    interface Interface {
      str: string
      num: number
      strOrNum: string | number
      null: null
    }

    type Result = MapProps<string, number, Interface>

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

    type Result = MapProps<string | number, number, Interface>

    assertType<Equals<Result, {
      str: number
      num: number
      strOrNum: number
      null: null
    }>>()
  })
})
