import { ToType } from '@src/to-type'
import { assertType, Equals } from '@test/utils'

describe('ToType<T>', () => {
  test('primitive', () => {
    assertType<Equals<ToType<string>, string>>()
    assertType<Equals<ToType<number>, number>>()
    assertType<Equals<ToType<boolean>, boolean>>()
  })

  test('function', () => {
    type Result = ToType<() => string>

    assertType<Equals<Result, () => string>>()
  })

  describe('type', () => {
    test('variable', () => {
      type Type = {
        foo: string
        bar: number
      }

      type Result = ToType<Type>

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

      type Result = ToType<Type>

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

      type Result = ToType<Type>

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

      type Result = ToType<Interface>

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

      type Result = ToType<Interface>

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

      type Result = ToType<Interface>

      assertType<Equals<
        Result
      , {
          [key: string]: string
        }
      >>()
    })
  })
})
