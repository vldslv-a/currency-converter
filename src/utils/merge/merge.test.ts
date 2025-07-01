import { merge } from '.';

type Characters = {
  characters: { age?: number; height?: string; name?: string }[];
};

it('should merge `source` into `object`', () => {
  const names: Characters = {
    characters: [{ name: 'barney' }, { name: 'fred' }],
  };

  const ages: Characters = {
    characters: [{ age: 36 }, { age: 40 }],
  };

  const heights: Characters = {
    characters: [{ height: '5\'4"' }, { height: '5\'5"' }],
  };

  const expected: Characters = {
    characters: [
      { name: 'barney', age: 36, height: '5\'4"' },
      { name: 'fred', age: 40, height: '5\'5"' },
    ],
  };

  expect(merge(names, ages, heights)).toEqual(expected);
  expect(merge({ a: 5, b: '' }, { b: 'value' })).toEqual({ a: 5, b: 'value' });
  expect(merge({ a: 5, b: ['value1'] }, { b: ['value5'] })).toEqual({ a: 5, b: ['value5'] });
});

it('merges deeply nested objects', () => {
  expect(merge({ a: 5, b: { c: { d: 'e', f: 'g' } } }, { b: { c: { d: 'w' } } })).toEqual({
    a: 5,
    b: { c: { d: 'w', f: 'g' } },
  });
});

it('merges object with nested arrays', () => {
  expect(merge({ a: [['222']], b: 10 }, { a: [['111']] })).toEqual({ a: [['111']], b: 10 });
});

it('should work with no source object', () => {
  expect(merge({ a: 5 })).toEqual({ a: 5 });
  expect(merge({ a: 5 }, undefined)).toEqual({ a: 5 });
});
