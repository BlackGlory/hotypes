import { assertType, Equals } from '@test/utils'
import { UnpackedIterable } from '@src/unpacked-iterable'

describe('UnpackedIterable<Iterable<T>>', () => {
  it('returns T', () => {
    type Result = UnpackedIterable<Iterable<string>>

    assertType<Equals<Result, string>>()
  })
})
