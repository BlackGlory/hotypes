import { assertType, Equals } from '@test/utils'
import { Nullable } from '@src/nullable'
import { NonNullable } from '@src/non-nullable'

describe('NonNullable<Nullable<T>>', () => {
  it('returns T', () => {
    type Result = NonNullable<Nullable<string>>

    assertType<Equals<Result, string>>()
  })
})

describe('NonNullable<null>', () => {
  it('returns never', () => {
    type Result = NonNullable<null>

    assertType<Equals<Result, never>>()
  })
})

describe('NonNullable<undefined>', () => {
  it('returns never', () => {
    type Result = NonNullable<undefined>

    assertType<Equals<Result, never>>()
  })
})

describe('NonNullable<null | undefined>', () => {
  it('returns never', () => {
    type Result = NonNullable<null | undefined>

    assertType<Equals<Result, never>>()
  })
})

describe('NonNullable<T | null>', () => {
  it('returns T', () => {
    type Result = NonNullable<string | null>

    assertType<Equals<Result, string>>()
  })
})

describe('NonNullable<T | undefined>', () => {
  it('returns T', () => {
    type Result = NonNullable<string | undefined>

    assertType<Equals<Result, string>>()
  })
})

describe('NonNullable<T | undefined | null>', () => {
  it('returns T', () => {
    type Result = NonNullable<string | undefined | null>

    assertType<Equals<Result, string>>()
  })
})
