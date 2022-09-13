import { assertType, Equals } from '@test/utils'
import { UnpackedArrayLike } from '@src/unpacked-array-like'

describe('UnpackedArray<ArrayLike<T>>', () => {
  it('returns T', () => {
    type Result = UnpackedArrayLike<ArrayLike<string>>

    assertType<Equals<Result, string>>()
  })
})

describe('UnpackedArray<Array<T>>', () => {
  it('returns T', () => {
    type Result = UnpackedArrayLike<Array<string>>

    assertType<Equals<Result, string>>()
  })
})

describe('UnpackedArray<T[]>', () => {
  it('returns T', () => {
    type Result = UnpackedArrayLike<string[]>

    assertType<Equals<Result, string>>()
  })
})
