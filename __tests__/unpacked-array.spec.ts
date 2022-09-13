import { assertType, Equals } from '@test/utils'
import { UnpackedArray } from '@src/unpacked-array'

describe('UnpackedArray<Array<T>>', () => {
  it('returns T', () => {
    type Result = UnpackedArray<Array<string>>

    assertType<Equals<Result, string>>()
  })
})

describe('UnpackedArray<T[]>', () => {
  it('returns T', () => {
    type Result = UnpackedArray<string[]>

    assertType<Equals<Result, string>>()
  })
})
