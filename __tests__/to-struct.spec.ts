import { ToStruct } from '@src/to-struct'
import { assertType, Equals } from '@test/utils'

describe('ToStruct<T>', () => {
  test('primitive', () => {
    assertType<Equals<ToStruct<string>, string>>()
    assertType<Equals<ToStruct<number>, number>>()
    assertType<Equals<ToStruct<boolean>, boolean>>()
  })

  test('function', () => {
    type Result = ToStruct<() => string>

    assertType<Equals<Result, () => string>>()
  })

  describe('type', () => {
    test('variable', () => {
      type Type = {
        foo: string
        bar: number
      }

      type Result = ToStruct<Type>

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

      type Result = ToStruct<Type>

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

      type Result = ToStruct<Type>

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

      type Result = ToStruct<Interface>

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

      type Result = ToStruct<Interface>

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

      type Result = ToStruct<Interface>

      assertType<Equals<
        Result
      , {
          [key: string]: string
        }
      >>()
    })
  })
})
