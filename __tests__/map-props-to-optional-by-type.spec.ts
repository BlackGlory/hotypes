import { assertType, Equals } from '@test/utils'
import { MapPropsToOptionalByKey } from '@src/map-props-to-optional-by-key'

test('MapPropsToOptionalByKey<T, Keys>', () => {
  interface Interface {
    a: string
    b?: string
    ab: string
  }

  type Result = MapPropsToOptionalByKey<Interface, 'ab'>

  assertType<
    Equals<
      Result
    , { a: string } & { b?: string; ab?: string }
    >
  >()
})
