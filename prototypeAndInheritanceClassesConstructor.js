// Create 2 objects: animal and cat, add move property to animal object, 
//cat object must inherit move property from object animal

let animal = {
    move: 0,
};

let cat = {};

cat.__proto__ = animal;

cat.move = 9;

console.log(animal);
console.log(cat);