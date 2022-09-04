import Number from '../src/number';

test('Number.isPositive()', () => {
  let obj = new Number(29);
  expect(obj.isPositive()).toBe(true);

  obj = new Number(-28);
  expect(obj.isPositive()).toBe(false);
});
