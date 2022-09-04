import Plane from '../src/plane';

test('Plane.moveUp()', () => {
  let obj = new Plane(10, 20);

  expect(obj.moveUp(3)).toBe(23);
  expect(obj.moveUp(10)).toBe(24);
});
