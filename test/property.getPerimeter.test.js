import Property from '../src/property';

test('Property.getPerimeter()', () => {
  let obj = new Property(10, 20, 3200, 'Av. Universidad 333');

  expect(obj.getPerimeter()).toBe(2 * 10 + 2 * 20);
});
