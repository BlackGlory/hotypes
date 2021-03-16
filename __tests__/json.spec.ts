import { expectType, expectNotType } from 'tsd'
import { Json } from '@src/json'

test('string is Json', () => {
  expectType<Json>('test')
})

test('number is Json', () => {
  expectType<Json>(1)
})

test('boolean is Json', () => {
  expectType<Json>(true)
})

test('null is Json', () => {
  expectType<Json>(null)
})

test('object is Json', () => {
  expectType<Json>({})
})

test('undefined isnt Json', () => {
  expectNotType<Json>(undefined)
})

test('Map isnt Json', () => {
  expectNotType<Json>(new Map())
})

test('Set isnt Json', () => {
  expectNotType<Json>(new Set())
})
