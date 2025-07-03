import { Prettify } from '@src/prettify'
import { assertType, Equals } from '@test/utils'

describe('Prettify<T>', () => {
  test('primitive', () => {
    assertType<Equals<Prettify<string>, string>>()
    assertType<Equals<Prettify<number>, number>>()
    assertType<Equals<Prettify<boolean>, boolean>>()
  })

  test('function', () => {
    type Result = Prettify<() => string>

    assertType<Equals<Result, () => string>>()
  })

  describe('type', () => {
    test('variable', () => {
      type Type = {
        foo: string
        bar: number
      }

      type Result = Prettify<Type>

      assertType<Equals<
        Result
      , {
          foo: string
          bar: number
        }
      >>()
    })

    test('method', () => {
      type Type = {
        foo(): string
      }

      type Result = Prettify<Type>

      assertType<Equals<
        Result
      , {
          foo(): string
        }
      >>()
    })

    test('index signature', () => {
      type Type = {
        [key: string]: string
      }

      type Result = Prettify<Type>

      assertType<Equals<
        Result
      , {
          [key: string]: string
        }
      >>()
    })
  })

  describe('interface', () => {
    test('variable', () => {
      interface Interface {
        foo: string
        bar: number
      }

      type Result = Prettify<Interface>

      assertType<Equals<
        Result
      , {
          foo: string
          bar: number
        }
      >>()
    })

    test('method', () => {
      interface Interface {
        foo(): string
      }

      type Result = Prettify<Interface>

      assertType<Equals<
        Result
      , {
          foo(): string
        }
      >>()
    })

    test('index signature', () => {
      interface Interface {
        [key: string]: string
      }

      type Result = Prettify<Interface>

      assertType<Equals<
        Result
      , {
          [key: string]: string
        }
      >>()
    })
  })
})
