import Property from '../src/property';

test('Property.getPrice()', () => {
  let obj = new Property(10, 20, 3200, 'Av. Universidad 333');

  expect(obj.getPrice()).toBe(10 * 20 * 3200);
});
