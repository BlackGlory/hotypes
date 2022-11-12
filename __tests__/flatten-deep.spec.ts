import { assertType, Equals } from '@test/utils'
import { FlattenDeep } from '@src/flatten-deep'

describe('FlattenDeep<T>', () => {
  test('no nesting', () => {
    type Result = FlattenDeep<[string, number]>

    assertType<Equals<Result, [string, number]>>()
  })

  test('with nesting', () => {
    type Result = FlattenDeep<[[string], [[number]]]>

    assertType<Equals<Result, [string, number]>>()
  })
})
