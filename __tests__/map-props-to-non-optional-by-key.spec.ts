import { assertType, Equals } from '@test/utils'
import { MapPropsToNonOptionalByKey } from '@src/map-props-to-non-optional-by-key'

test('MapPropsToNonOptionalByKey<T, Keys>', () => {
  interface Interface {
    a: string
    b?: string
    c?: string
  }

  type Result = MapPropsToNonOptionalByKey<Interface, 'c'>
  type A = Result['a']
  type B = Result['b']
  type C = Result['c']

  assertType<Equals<A, string>>()
  assertType<Equals<B, string | undefined>>()
  assertType<Equals<C, string>>()
  // @ts-ignore
  assertType<Equals<
    Result
  , {
      a: string
      b?: string | undefined
      c: string
    }
  >>()
})
