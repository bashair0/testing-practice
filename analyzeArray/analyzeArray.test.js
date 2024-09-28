const analyzeArray = require('./analyzeArray')

test('average is 4', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).average).toBe(4)
})

test('min is 1', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).min).toBe(1)
})

test('max is 8', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).max).toBe(8)
})

test('length is 6', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).length).toBe(6)
})
