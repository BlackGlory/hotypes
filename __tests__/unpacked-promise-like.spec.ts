import { assertType, Equals } from '@test/utils'
import { UnpackedPromiseLike } from '@src/unpacked-promise-like'

describe('UnpackedPromiseLike<PromiseLike<T>>', () => {
  it('returns T', () => {
    type Result = UnpackedPromiseLike<PromiseLike<string>>

    assertType<Equals<Result, string>>()
  })
})

describe('UnpackedPromiseLike<Promise<T>>', () => {
  it('returns T', () => {
    type Result = UnpackedPromiseLike<Promise<string>>

    assertType<Equals<Result, string>>()
  })
})
