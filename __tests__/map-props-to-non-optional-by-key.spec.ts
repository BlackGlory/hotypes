import { assertType, Equals } from '@test/utils'
import { MapPropsToNonOptionalByKey } from '@src/map-props-to-non-optional-by-key'

test('MapPropsToNonOPtionalByKey<T, Keys>', () => {
  interface Interface {
    a: string
    b?: string
    ab?: string
  }

  type Result = MapPropsToNonOptionalByKey<Interface, 'ab'>

  assertType<
    Equals<
      Result
    , { a: string } & { b?: string; ab?: string } & { ab: string }
    >
  >()
})
