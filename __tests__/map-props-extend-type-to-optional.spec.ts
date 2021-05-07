import { assertType, Equals } from '@test/utils'
import { MapPropsExtendTypeToOptional } from '@src/map-props-extend-type-to-optional'

test('MapPropsExtendTypeToOptional<T, Keys>', () => {
  interface Interface {
    a: string
    b?: string
    ab: string
  }

  type Result = MapPropsExtendTypeToOptional<Interface, 'ab'>

  assertType<
    Equals<
      Result
    , { a: string } & { b?: string; ab?: string }
    >
  >()
})
