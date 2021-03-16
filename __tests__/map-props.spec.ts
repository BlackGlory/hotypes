import { assertType, Equals } from '@test/utils'
import { MapProps } from '@src/map-props'

test('MapProps<T>', () => {
  interface Interface {
    str: string
    num: number
    strOrNum: string | number
  }

  type Result = MapProps<string, number, Interface>

  assertType<Equals<Result, {
    str: number
    num: number
    strOrNum: number
  }>>()
})

test('MapProps<T>', () => {
  interface Interface {
    str: string
    num: number
    strOrNum: string | number
  }

  type Result = MapProps<string, number, Interface>

  assertType<Equals<Result, {
    str: number
    num: number
    strOrNum: number
  }>>()
})
