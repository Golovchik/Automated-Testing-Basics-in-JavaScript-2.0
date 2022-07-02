// Create 2 objects: animal and cat, add move property to animal object, 
//cat object must inherit move property from object animal

let animal = {
    move: 0,
};

let cat = {};

cat.__proto__ = animal;

console.log(animal); //{ move: 0 }
console.log(cat);    //{}
console.log(cat.move); //0

animal.move = 3;

console.log(animal.move); //3
console.log(cat.move);    //3