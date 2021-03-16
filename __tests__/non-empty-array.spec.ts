import { expectType, expectNotType } from 'tsd'
import { NonEmptyArray } from '@src/non-empty-array'

test('[] isnt NonEmptyArray', () => {
  expectNotType<NonEmptyArray<unknown>>([])
  expectNotType<NonEmptyArray>([])
})

test('[T] is NonEmptyArray', () => {
  expectType<NonEmptyArray<number>>([1])
  expectType<NonEmptyArray>([1])
})
