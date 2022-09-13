import { assertType, Equals } from '@test/utils'
import { ReplaceAllProps } from '@src/replace-all-props'

test('ReplaceAllProps', () => {
  interface Interface {
    a: string
    b: number
  }

  type Result = ReplaceAllProps<Interface, boolean>

  assertType<Equals<Result, {
    a: boolean
    b: boolean
  }>>()
})
