import { assertType, Equals, NotEqual } from '@test/utils'
import { Constructor } from '@src/constructor'

test('new () => T is Consturctor', () => {
  class Class {}

  assertType<Equals<Constructor<Class>, new (...args: any) => Class>>()
  assertType<Equals<Constructor, new (...args: any) => unknown>>()
})

test('() => T isnt Constructor', () => {
  function fn(): string {
    return 'test'
  }

  assertType<NotEqual<Constructor<ReturnType<typeof fn>>, () => string>>()
  assertType<NotEqual<Constructor, () => string>>()
})
