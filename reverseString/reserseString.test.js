import reverseString from './reserseString';

test('reverse a word', () => {
  expect(reverseString('hello')).toEqual('olleh');
});

test('reverse a string of words', () => {
  expect(reverseString('lorem ipsum dolor sit amet.')).toEqual(
    '.tema tis rolod muspi merol'
  );
});

test('maintains case', () => {
  expect(reverseString('Lorem ipsum Dolor sit Amet.')).toEqual(
    '.temA tis roloD muspi meroL'
  );
});
