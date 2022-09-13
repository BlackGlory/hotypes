import { assertType, Equals } from '@test/utils'
import { MapAllProps } from '@src/map-all-props'

test('MapAllProps', () => {
  interface Interface {
    a: string
    b: number
  }

  type Result = MapAllProps<Interface, boolean>

  assertType<Equals<Result, {
    a: boolean
    b: boolean
  }>>()
})
