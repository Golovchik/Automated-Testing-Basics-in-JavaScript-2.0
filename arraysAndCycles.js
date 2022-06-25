//Given an array consisting of movie names, iterate over the array with the output of the names of each movie to the console
let movies = ["Next", "The Pacifier", "Tropic Thunder"];

movies.forEach(item => console.log(item));

for (const iterator of movies) {
    console.log(iterator); 
}

for (let index = 0; index < movies.length; index++) {
    console.log(movies[index]); 
}

//Given an array of car manufacturers, convert the array to a string and back to an array
let carManufactures = ["Volvo", "BMW", "Feat"];
console.log(carManufactures);

let stringCarManufactures = carManufactures.join(" ");
console.log(stringCarManufactures);

let arrCarManufactures = stringCarManufactures.split(" "); 
console.log(arrCarManufactures);

//Given an array of the names of your friends, add the words hello to each element of the array
let nameMyFriends = ["Alex", "Vika", "Tomas"];

let newNameMyFriends = nameMyFriends.map((item, Index, Array) => item = "Hello " + item);
console.log(newNameMyFriends);

nameMyFriends.forEach(item => item = "Hello " + item);
console.log(nameMyFriends);

//Convert numeric array to Boolean
let numericArray = [0, 1, 2, -3];

let booleanArray = numericArray.map(item => Boolean(item));
console.log(booleanArray);

//Sort the array [1,6,7,8,3,4,5,6] in descending order
let sortArray = [1,6,7,8,3,4,5,6];

sortArray.sort((a, b) => b - a);
console.log(sortArray);

//Filter array [1,6,7,8,3,4,5,6] by value> 3
let filterArray = [1,6,7,8,3,4,5,6];

let filterArrayByValue3 = filterArray.filter(item => item > 3);
console.log(filterArrayByValue3);

//Write a function that takes two parameters - an array and a number and outputs the index of an array element equal to a number
let arrayOfNumbers = [5, 7, 8];

function getIndexNumberInArray(array, number) {
    return array.indexOf(number);
}
console.log(getIndexNumberInArray(arrayOfNumbers, 7));

//﻿Implement a loop that will print the number 'a' until it is less than 10
let a = 14;

while(a >= 10) {
    console.log(a);
    a--;
}

//Implement a loop that prints prime numbers to the console
let b = 14;

function prime(n){ 
	for(let i=2; i <= Math.sqrt(n); i++)
		if(n%i==0)
			return false;
	return true;
}

while(b > 0) {
    
    if(prime(b)) {
        console.log(b);
    }

    b--;
}

//Implement a loop that prints odd numbers to the console
let c = 14;

for (let i = 0; i < c; i++) { 
    if (i % 2 != 0) {
        console.log(i)
    }
}
