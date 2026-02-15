import { assertType, Equals } from '@test/utils'
import { ParametersOfConstructor } from '@src/parameters-of-constructor'
import { pass } from '@blackglory/pass'

describe('ParametersOfConstructor', () => {
  it('returns the parameters type of constructor', () => {
    class Class {
      constructor(foo: number, bar: string) {
        pass()
      }
    }

    type Result = ParametersOfConstructor<typeof Class>

    assertType<Equals<Result, [foo: number, bar: string]>>()
  })
})
