const calculator = require('./calculator')

test('add 1 + 1 = 2', () => {
  expect(calculator.add(1, 1)).toBe(2)
})

test('subtract 5 - 2 = 3', () => {
  expect(calculator.sub(5, 2)).toBe(3)
})

test('multiply 5 * 5 = 25', () => {
  expect(calculator.multi(5, 5)).toEqual(25)
})

test('divide 7 / 2 = 3.5', () => {
  expect(calculator.div(7, 2)).toBeCloseTo(3.5)
})
