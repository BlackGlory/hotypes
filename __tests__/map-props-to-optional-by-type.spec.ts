import { assertType, Equals } from '@test/utils'
import { MapPropsToOptionalByKey } from '@src/map-props-to-optional-by-key'

test('MapPropsToOptionalByKey<T, Keys>', () => {
  interface Interface {
    a: string
    b?: string
    c: string
  }

  type Result = MapPropsToOptionalByKey<Interface, 'c'>

  assertType<Equals<Result['a'], string>>()
  assertType<Equals<Result['b'], string | undefined>>()
  assertType<Equals<Result['c'], string | undefined>>()
  // @ts-ignore
  assertType<Equals<
    Result
  , {
      a: string
      b?: string
      c?: string
    }
  >>()
})
