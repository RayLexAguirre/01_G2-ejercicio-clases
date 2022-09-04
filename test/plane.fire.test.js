import Plane from '../src/plane';

test('Plane.fire()', () => {
  let obj = new Plane(10, 20);

  expect(obj.fire('laser').toLowerCase()).toBe('fire laser!');
});
