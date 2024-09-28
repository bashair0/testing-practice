const caesarCipher = require('./caesarCipher')

test('wrapping from z to a', () => {
  expect(caesarCipher('xyz', 3)).toBe('abc')
})

test('case preservation', () => {
  expect(caesarCipher('HeLLo', 3)).toBe('KhOOr')
})

test('non alphabetical should not change', () => {
  expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!')
})
