import { assertType, Equals } from '@test/utils'
import { MapPropsToRequiredByKey } from '@src/map-props-to-required-by-key'

describe('MapPropsToRequiredByKey<T, Keys>', () => {
  test('Optional<T>', () => {
    interface Interface {
      a: string
      b?: string
      c?: string
    }

    type Result = MapPropsToRequiredByKey<Interface, 'c'>
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

  test('T | undefined', () => {
    interface Interface {
      a: string
      b?: string
      c: string | undefined
    }

    type Result = MapPropsToRequiredByKey<Interface, 'c'>
    type A = Result['a']
    type B = Result['b']
    type C = Result['c']

    assertType<Equals<A, string>>()
    assertType<Equals<B, string | undefined>>()
    assertType<Equals<C, string | undefined>>()
    // @ts-ignore
    assertType<Equals<
      Result
    , {
        a: string
        b?: string | undefined
        c: string | undefined
      }
    >>()
  })
})
