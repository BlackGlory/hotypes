import { assertType, Equals } from '@test/utils'
import { PropByPath } from '@src/prop-by-path'

describe('PropByPath', () => {
  describe('deep', () => {
    test('exists', () => {
      interface Interface {
        foo: {
          bar: Interface
        }
        baz: string
      }
      type Path = ['foo', 'bar', 'baz']

      type Result = PropByPath<Interface, Path>

      type Expected = Interface['foo']['bar']['baz']
      assertType<Equals<Result, Expected>>()
    })

    test('does not exist', () => {
      interface Interface {
        foo: {
          bar: Interface
        }
        baz: string
      }
      type Path = ['foo', 'bar', 'bar']

      type Result = PropByPath<Interface, Path>

      // type Expected = Interface['foo']['bar']['bar']
      type Expected = undefined
      assertType<Equals<Result, Expected>>()
    })
  })

  describe('shallow', () => {
    describe('array', () => {
      test('exists', () => {
        type Arr = ['foo', 'bar']
        type Path = [1]

        type Result = PropByPath<Arr, Path>

        type Expected = Arr[1]
        assertType<Equals<Result, Expected>>()
      })

      test('does not exist', () => {
        type Arr = ['foo', 'bar']
        type Path = [2]

        type Result = PropByPath<Arr, Path>

        // type Expected = Arr[2]
        type Expected = undefined
        assertType<Equals<Result, Expected>>()
      })
    })

    describe('class', () => {
      test('exists', () => {
        class Class {
          foo = 1
          bar = 2
        }
        const instance = new Class()
        type Instance = typeof instance
        type Path = ['bar']

        type Result = PropByPath<Instance, Path>

        type Expected = Instance['bar']
        assertType<Equals<Result, Expected>>()
      })

      test('does not exist', () => {
        class Class {
          foo = 1
          bar = 2
        }
        const instance = new Class()
        type Instance = typeof instance
        type Path = ['baz']

        type Result = PropByPath<Instance, Path>

        // type Expected = Instance['baz']
        type Expected = undefined
        assertType<Equals<Result, Expected>>()
      })
    })

    describe('interface', () => {
      test('exists', () => {
        interface Interface {
          foo: 1
          bar: 2
        }
        type Path = ['bar']

        type Result = PropByPath<Interface, Path>

        type Expected = Interface['bar']
        assertType<Equals<Result, Expected>>()
      })

      test('does not exist', () => {
        interface Interface {
          foo: 1
          bar: 2
        }
        type Path = ['baz']

        type Result = PropByPath<Interface, Path>

        // type Expected = Interface['baz']
        type Expected = undefined
        assertType<Equals<Result, Expected>>()
      })
    })
  })
})
