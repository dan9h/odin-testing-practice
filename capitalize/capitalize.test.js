import capitalize from './capitalize';

test('capitalize a single word', () => {
  expect(capitalize('hello')).toEqual('Hello');
});

test('capitalize a string of words', () => {
  expect(capitalize('lorem ipsum dolor sit amet.')).toEqual(
    'Lorem Ipsum Dolor Sit Amet.'
  );
});

test('empty string', () => {
  expect(capitalize('')).toEqual('');
});

test('one character', () => {
  expect(capitalize('a')).toEqual('A');
});
