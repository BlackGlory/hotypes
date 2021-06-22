import { assertType, Equals } from '@test/utils'
import { MapPropsByKeyToOptional } from '@src/map-props-by-key-to-optional'

test('MapPropsByKeyToOptional<T, Keys>', () => {
  interface Interface {
    a: string
    b?: string
    ab: string
  }

  type Result = MapPropsByKeyToOptional<Interface, 'ab'>

  assertType<
    Equals<
      Result
    , { a: string } & { b?: string; ab?: string }
    >
  >()
})
