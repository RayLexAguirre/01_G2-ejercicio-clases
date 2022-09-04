import Plane from "./Plane.js";
import Property from "./property.js"
import Number from "./number.js"

let plane01 = new Plane(20, 2); //<- es un objeto o instancia de la clase

let plane02 = new Plane (2, 5);

console.log(plane01.moveUp(10));
console.log(plane01.fire('bullet'));

console.log(plane02.moveUp(5));
console.log(plane02.fire('bullet'));

let home = new Property(10, 20, 32000, "Av. Revolucion #200");
let university = new Property(100, 200, 5000, "Av. Universidad #333");

console.log(home.getArea());
console.log(university.getArea());

console.log(home.getPrice());
console.log(university.getPrice());

let numberX = new Number(10);
let numberY = new Number(7);

console.log(numberX.isEven());
console.log(numberY.isEven());
