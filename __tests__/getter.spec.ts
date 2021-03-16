import { assertType, Equals, NotEqual } from '@test/utils'
import { Getter } from '@src/getter'

test('() => T is Getter', () => {
  type Result = Getter<string>

  assertType<Equals<Result, () => string>>()
})

test('() => void isnt Getter', () => {
  type Result = Getter<string>

  assertType<NotEqual<Result, () => void>>()
})
