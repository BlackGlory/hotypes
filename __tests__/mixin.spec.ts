import { assertType, Equals } from '@test/utils'
import { Mixin } from '@src/mixin'

test('Mixin<Base, Other>', () => {
  interface Base {
    a: string
    b: number
  }

  interface Other {
    a: number
    c: boolean
  }

  type Result = Mixin<Base, Other>

  // @ts-ignore
  assertType<Equals<Result, {
    a: number
    b: number
    c: boolean
  }>>()
})
