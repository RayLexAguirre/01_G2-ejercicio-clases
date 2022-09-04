import Plane from '../src/plane';

test('Plane.moveRight()', () => {
  let obj = new Plane(10, 20);

  expect(obj.moveRight(3)).toBe(13);
  expect(obj.moveRight(80)).toBe(80);
});
