const calculator = require('./test3.js');

describe('Adding two numbers', () => {
  test(' 1 + 2 = 3', () => {
    expect(calculator.add(1,2)).toBe(3);
  });

  test('one value is missing ', () => {
    expect(calculator.add(1)).toBe('one value is missing');
  });

  test('no value is given', () => {
    expect(calculator.add()).toBe(0);
  });

  test('you cannot add two strings', () => {
    expect(calculator.add('game', 'home')).toBe('error');
  });
});