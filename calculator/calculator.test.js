import calculator from './calculator';

test('Addition: 1 + 2 = 3', () => {
  expect(calculator.add(1, 2)).toEqual(3);
});

test('Subtraction: 10 - 6 = 4', () => {
  expect(calculator.subtract(10, 6)).toEqual(4);
});

test('Subtraction with negative result: 5 - 11 = -6', () => {
  expect(calculator.subtract(5, 11)).toEqual(-6);
});

test('Division, 20 / 4 = 5', () => {
  expect(calculator.divide(20, 4)).toEqual(5);
});

test('Division by zero, 1 / 0 = Infinity', () => {
  expect(calculator.divide(1, 0)).toEqual(Infinity);
});

test('Multiplication, 6 * 6 = 36', () => {
  expect(calculator.multiply(6, 6)).toEqual(36);
});
