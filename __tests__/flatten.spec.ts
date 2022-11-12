import { assertType, Equals } from '@test/utils'
import { Flatten } from '@src/flatten'

describe('Flatten<Tuple>', () => {
  test('no nesting', () => {
    type Result = Flatten<[string, number]>

    assertType<Equals<Result, [string, number]>>()
  })

  test('with nesting', () => {
    type Result = Flatten<[[string], [[number]]]>

    assertType<Equals<Result, [string, [number]]>>()
  })
})
