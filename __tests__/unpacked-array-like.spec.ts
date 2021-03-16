import { assertType, Equals } from '@test/utils'
import { UnpackedArrayLike } from '@src/unpacked-array-like'

describe('UnpackedArrayLike<ArrayLike<T>>', () => {
  it('returns T', () => {
    type Result = UnpackedArrayLike<ArrayLike<string>>

    assertType<Equals<Result, string>>()
  })
})

describe('UnpackedArrayLike<Array<T>>', () => {
  it('returns T', () => {
    type Result = UnpackedArrayLike<Array<string>>

    assertType<Equals<Result, string>>()
  })
})

describe('UnpackedArrayLike<T[]>', () => {
  it('returns T', () => {
    type Result = UnpackedArrayLike<string[]>

    assertType<Equals<Result, string>>()
  })
})
