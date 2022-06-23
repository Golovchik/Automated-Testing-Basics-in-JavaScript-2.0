//-        Create a car object, add a color property to it with the value equals 'black'
let car = {
    color: 'black',
};

//-        Change the color property of the car object to 'green'
car.color = 'green';
car["color"] = 'green';

//-        Add the power property to the car object, which is a function and displays the engine power to the console
car.power = function () {
    console.log("engine power...");
};

car.power();

//-        Pears and apples are accepted to the warehouse, write a function that returns 
//   the result of adding the number of accepted pears and apples
function calcSumPearsAndApples(nomberOfPears, nomberOfApples) {
    if (typeof nomberOfPears == "number" && typeof nomberOfApples == "number") {
        return nomberOfPears + nomberOfApples;
    }
    
    return "Type of patameters must be a 'number'!!!";
}

console.log(calcSumPearsAndApples(5, 7));
console.log(calcSumPearsAndApples("е", 7));

//-       Your name is saved in the payment terminal, write a function to define the name in the terminal
//   (if you entered your name, then hello + name, if not, then there is no such name)
let terminal = {
    name: "Uladzislau",
};

function authorizationInTheTerminal(name) {
    if (terminal["name"] === name) {
        return "hello " + name;
    } else {
        return "is no such name: " + name;
    }
}

console.log(authorizationInTheTerminal("Uladzislau"));
console.log(authorizationInTheTerminal("Alex"));

//-        Write a function for calculating the type of argument and type output to the console
function showTypeofArfument(arg) {
    type = typeof arg;

    console.log(`argument: ${arg} - type: ${type}`);
}

showTypeofArfument(5);
showTypeofArfument("33");
showTypeofArfument(true);

//-        Write a function that determines whether a number is prime or not
function checkPrimeNumber(n) {

    if (typeof n != "number" || n % 1 != 0) {
        return false;
    }

    if (n <= 3) {
       return true; 
    }

    if (n % 2 != 0 && n % 3 != 0) {
        return true;
    }
    
    return false;
  }

  console.log(checkPrimeNumber(3));
  console.log(checkPrimeNumber(4));
  console.log(checkPrimeNumber(7));
  console.log(checkPrimeNumber("9"));
  console.log(checkPrimeNumber(11.1));