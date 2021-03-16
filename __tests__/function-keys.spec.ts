import { assertType, Equals } from '@test/utils'
import { FunctionKeys } from '@src/function-keys'

test('FunctionKeys<T>', () => {
  type Result = FunctionKeys<{
    str: string
    fn: () => void
  }>

  assertType<Equals<Result, 'fn'>>()
})
