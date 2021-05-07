import { assertType, Equals } from '@test/utils'
import { FunctionKeys } from '@src/function-keys'

test('FunctionKeys<T>', () => {
  type Result = FunctionKeys<{
    str: string
    fn1: () => void
    fn2(val: string): string
  }>

  assertType<Equals<Result, 'fn1' | 'fn2'>>()
})
