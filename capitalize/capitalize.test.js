const capitalize = require('./capitalize')

test('the A in apple is capitalized', () => {
  expect(capitalize('apple')).toMatch(/Apple/)
})

test('the B in banana is capitalized', () => {
  expect(capitalize('banana')).toBe('Banana')
})
