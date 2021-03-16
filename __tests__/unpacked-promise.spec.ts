import { assertType, Equals } from '@test/utils'
import { UnpackedPromise } from '@src/unpacked-promise'

describe('UnpackedPromise<Promise<T>>', () => {
  it('returns T', () => {
    type Result = UnpackedPromise<Promise<string>>

    assertType<Equals<Result, string>>()
  })
})
