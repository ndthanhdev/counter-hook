import { increase, decrease, increaseAsync } from './actions'

test('increase', () => {
  expect(increase()).toBeDefined()
})

test('decrease', () => {
  expect(decrease()).toBeDefined()
})

test('increaseAsync', () => {
  expect(increaseAsync()).toBeDefined()
})
