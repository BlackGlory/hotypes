import { Equals } from '@src/equals'
import { assertType, Equals as Eq } from '@test/utils'

describe('Equals<X, Y>', () => {
  test('logic', () => {
    assertType<Eq<Equals<true, true>, true>>()
    assertType<Eq<Equals<true, false>, false>>()
    assertType<Eq<Equals<false, true>, false>>()
    assertType<Eq<Equals<false, false>, true>>()
  })

  test('union type', () => {
    assertType<Eq<Equals<string | number, string>, false>>()
    assertType<Eq<Equals<string, string | number>, false>>()
    assertType<Eq<Equals<string | number, string | number>, true>>()
    assertType<Eq<Equals<string | number, number | string>, true>>()
  })
})
