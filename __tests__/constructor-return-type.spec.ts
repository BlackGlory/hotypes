import { ConstructorReturnType } from '@src/constructor-return-type'
import { assertType, Equals } from '@test/utils'

describe('ConstructorReturnType', () => {
  it('returns the return type of constructor', () => {
    class Class {}

    type Result = ConstructorReturnType<typeof Class>

    assertType<Equals<Result, Class>>()
  })
})
