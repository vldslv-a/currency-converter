import { entries } from '.';

it('should return entries for an object', () => {
  const object = { a: 1, b: 'string', c: true };

  expect(entries(object)).toEqual([
    ['a', 1],
    ['b', 'string'],
    ['c', true],
  ]);
});

it('should return entries for an array', () => {
  const array = ['a', 'b', 'c', 4, true];

  expect(entries(array)).toEqual([
    ['0', 'a'],
    ['1', 'b'],
    ['2', 'c'],
    ['3', 4],
    ['4', true],
  ]);
});

it('should return correct entries for a nested values', () => {
  const nestedObject = { a: 1, b: { c: 2, d: 3 } };
  const nestedArray = [1, { a: 'string', b: true }];

  expect(entries(nestedObject)).toEqual([
    ['a', 1],
    ['b', { c: 2, d: 3 }],
  ]);

  expect(entries(nestedArray)).toEqual([
    ['0', 1],
    ['1', { a: 'string', b: true }],
  ]);
});
