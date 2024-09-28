const revertString = require('./reverseString')

test('hello is olleh', () => {
  expect(revertString('hello')).toMatch(/olleh/)
})

test('Greeting from Earth is htraE morf sgniteerG', () => {
  expect(revertString('Greetings from Earth')).toBe('htraE morf sgniteerG')
})
