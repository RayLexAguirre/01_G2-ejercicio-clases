import Plane from '../src/plane';

test('Plane.moveDown()', () => {
  let obj = new Plane(10, 20);

  expect(obj.moveDown(3)).toBe(17);
  expect(obj.moveDown(40)).toBe(0);
});
