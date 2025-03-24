const sum = require('../sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});


test('adds 4 + 2 to equal 6', () => {
  expect(sum(4, 2)).toBe(6);
});


test('adds 5 + 2 should not be equal 6', () => {
  expect(sum(5, 2)).not.toBe(6);
});


test('adds 10 + 2 should not be equal 6', () => {
  expect(sum(10, 2)).not.toBe(6);
});