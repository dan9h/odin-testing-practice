import analyzeArray from './analyzeArray';

test('', () => {
  const data = [1, 8, 3, 4, 2, 6];
  const { average, min, max, length } = analyzeArray(data);

  expect(average).toEqual(4);
  expect(min).toEqual(1);
  expect(max).toEqual(8);
  expect(length).toEqual(6);
});
