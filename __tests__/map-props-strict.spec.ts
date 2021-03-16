import { assertType, Equals } from '@test/utils'
import { MapPropsStrict } from '@src/map-props-strict'

test('MapPropsStrict<T>', () => {
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
