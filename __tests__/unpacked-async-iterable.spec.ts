import { assertType, Equals } from '@test/utils'
import { UnpackedAsyncIterable } from '@src/unpacked-async-iterable'

describe('UnpackedAsyncIterable<AsyncIterable<T>>', () => {
  it('returns T', () => {
    type Result = UnpackedAsyncIterable<AsyncIterable<string>>

    assertType<Equals<Result, string>>()
  })
})
