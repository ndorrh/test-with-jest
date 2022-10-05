const stringLength = require('./test1');

test('returns length of the entered string', () => {
  expect(stringLength('microverse')).toBe(10);
});

test('String length is greater than 10', () => {
  expect(stringLength('microverse and me')).toBe('error');
});

test('String length is less than 1', () => {
  expect(stringLength('')).toBe('error');
});