import { assertType, Equals } from '@test/utils'
import { MixinAll } from '@src/mixin-all'

test('MixinAll<Tuple>', () => {
  interface Base {
    a: string
    b: number
  }

  interface Other {
    a: number
    c: boolean
  }

  type Result = MixinAll<[Base, Other]>

  assertType<Equals<Result, {
    a: number
    b: number
    c: boolean
  }>>()
})
