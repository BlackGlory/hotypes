import { assertType, Equals } from '@test/utils'
import { GetFunctionKeys } from '@src/get-function-keys'

test('GetFunctionKeys<T>', () => {
  type Result = GetFunctionKeys<{
    str: string
    fn1: () => void
    fn2(val: string): string
  }>

  assertType<Equals<Result, 'fn1' | 'fn2'>>()
})
