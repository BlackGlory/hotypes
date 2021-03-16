import { assertType, Equals } from '@test/utils'
import { Nullable } from '@src/nullable'
import { ExcludeNullable } from '@src/exclude-nullable'

describe('ExcludeNullable<Nullable<T>>', () => {
  it('returns T', () => {
    type Result = ExcludeNullable<Nullable<string>>

    assertType<Equals<Result, string>>()
  })
})

describe('ExcludeNullable<null>', () => {
  it('returns never', () => {
    type Result = ExcludeNullable<null>

    assertType<Equals<Result, never>>()
  })
})

describe('ExcludeNullable<undefined>', () => {
  it('returns never', () => {
    type Result = ExcludeNullable<undefined>

    assertType<Equals<Result, never>>()
  })
})

describe('ExcludeNullable<null | undefined>', () => {
  it('returns never', () => {
    type Result = ExcludeNullable<null | undefined>

    assertType<Equals<Result, never>>()
  })
})

describe('ExcludeNullable<T | null>', () => {
  it('returns T', () => {
    type Result = ExcludeNullable<string | null>

    assertType<Equals<Result, string>>()
  })
})

describe('ExcludeNullable<T | undefined>', () => {
  it('returns T', () => {
    type Result = ExcludeNullable<string | undefined>

    assertType<Equals<Result, string>>()
  })
})

describe('ExcludeNullable<T | undefined | null>', () => {
  it('returns T', () => {
    type Result = ExcludeNullable<string | undefined | null>

    assertType<Equals<Result, string>>()
  })
})
