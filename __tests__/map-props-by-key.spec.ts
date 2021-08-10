import { assertType, Equals } from '@test/utils'
import { MapPropsByKey } from '@src/map-props-by-key'

describe('MapPropsByKey<T, Keys, NewType>', () => {
  test('type', () => {
    interface Interface {
      target: string
      other: string
    }

    type Result = MapPropsByKey<Interface, 'target', number>

    assertType<Equals<Result, {
      target: number
      other: string
    }>>()
  })

  test('multiple keys', () => {
    interface Interface {
      target1: string
      target2: string
      other: string
    }

    type Result = MapPropsByKey<Interface, 'target1' | 'target2', number>

    assertType<Equals<Result, {
      target1: number
      target2: number
      other: string
    }>>()
  })
})
