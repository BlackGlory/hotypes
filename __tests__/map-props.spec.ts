import { assertType, Equals } from '@test/utils'
import { MapProps } from '@src/map-props'

test('MapProps', () => {
  interface Interface {
    a: string
    b: number
  }

  type Result = MapProps<Interface, boolean>

  assertType<Equals<Result, {
    a: boolean
    b: boolean
  }>>()
})
