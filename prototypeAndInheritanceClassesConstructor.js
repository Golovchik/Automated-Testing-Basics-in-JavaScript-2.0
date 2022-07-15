// Create 2 objects: animal and cat, add move property to animal object, 
//cat object must inherit move property from object animal

class Animal {
    constructor(move) {
        this.move = move;
    } 
}

class Cat extends Animal {
    constructor(move) {
        super(move);
    } 
}

let animal = new Animal(0);
let cat = new Cat(5);

console.log(animal); //Animal { move: 0 }
console.log(cat);    //Cat { move: 5 }

animal.move = 3;
cat.move = 7;

console.log(animal.move); //3
console.log(cat.move);    //7