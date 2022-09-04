import Plane from '../src/plane';

test('Plane.moveLeft()', () => {
  let obj = new Plane(10, 20);

  expect(obj.moveLeft(3)).toBe(7);
  expect(obj.moveLeft(40)).toBe(0);
});
