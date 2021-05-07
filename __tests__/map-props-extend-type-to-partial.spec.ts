import { assertType, Equals } from '@test/utils'
import { MapPropsExtendTypeToPartial } from '@src/map-props-extend-type-to-partial'

test('MapPropsExtendTypeToPartial<T, Keys>', () => {
  interface Interface {
    a: string
    b?: string
    ab: string
  }

  type Result = MapPropsExtendTypeToPartial<Interface, 'ab'>

  assertType<
    Equals<
      Result
    , { a: string } & { b?: string; ab?: string }
    >
  >()
})
