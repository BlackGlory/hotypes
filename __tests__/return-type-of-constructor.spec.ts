import { assertType, Equals } from '@test/utils'
import { ReturnTypeOfConstructor } from '@src/return-type-of-constructor'

describe('ReturnTypeOfConstructor', () => {
  it('returns the return type of constructor', () => {
    class Class {}

    type Result = ReturnTypeOfConstructor<typeof Class>

    assertType<Equals<Result, Class>>()
  })
})
