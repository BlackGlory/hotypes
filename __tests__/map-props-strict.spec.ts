import { assertType, Equals } from '@test/utils'
import { MapPropsStrict } from '@src/map-props-strict'

describe('MapPropsStrict<OldType, NewType, T>', () => {
  test('type', () => {
    interface Interface {
      str: string
      num: number
      strOrNum: string | number
    }

    type Result = MapPropsStrict<string, number, Interface>

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

    type Result = MapPropsStrict<string | number, number, Interface>

    assertType<Equals<Result, {
      str: string
      num: number
      strOrNum: number
    }>>()
  })
})
