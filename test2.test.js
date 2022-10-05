const reverseString = require('./test2.js');

test('Return a string in reverse', () => {
  const revStr = 'Microverse'
  expect(reverseString(revStr)).toBe('esrevorciM');
});

test('Cannot reverse empty string ', () => {
  const revStr = ''
  expect(reverseString(revStr)).toBe('String is empty');
});
