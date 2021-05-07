import { assertType, Equals } from '@test/utils'
import { MapPropsByKeyToNonOptional } from '@src/map-props-by-key-to-non-optional'

test('MapPropsByKeyToNonOptional<T, Keys>', () => {
  interface Interface {
    a: string
    b?: string
    ab?: string
  }

  type Result = MapPropsByKeyToNonOptional<Interface, 'ab'>

  assertType<
    Equals<
      Result
    , { a: string } & { b?: string; ab?: string } & { ab: string }
    >
  >()
})
