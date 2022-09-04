import Number from '../src/number';

test('Number()', () => {
  let obj = new Number(150);

  expect(obj.value).toBe(150);
});
