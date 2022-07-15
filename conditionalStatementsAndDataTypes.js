//1.Perform addition of various types (string + boolean, string + number, number + boolean)
console.log("12" + true); // 12true
console.log(false + "12"); // false12 

console.log("12" + 5); // "125"

console.log(12 + true); // 13
console.log(12 + false); // 12


//2.Perform multiplication of various types (string * boolean, string * number, number * boolean)
console.log("12" * true); // 12
console.log("12" * false); // 0

console.log("12" * 2); // 24

console.log(12 * true); // 12
console.log(12 * false); // 0


//3.Divide different types (string / boolean, string / number, number / Boolean)
console.log("12" / true); // 12
console.log("12" / false); // Infinity

console.log("12" / 2); // 6

console.log(12 / true); // 12
console.log(12 / false); // Infinity

//4.Perform explicit conversion (number, string, boolean)
console.log(+12); // 12
console.log(+"12"); // 12
console.log(+true); // 1
console.log(+false); // 0
console.log(+undefined); // NaN
console.log(+null); // 0
console.log(+NaN); // NaN

console.log(`${12}`); // "12"
console.log(`${"12"}`); // "12"
console.log(`${true}`); // "true"
console.log(`${false}`); // "false"
console.log(`${undefined}`); // "undefined"
console.log(`${null}`); // "null"
console.log(`${NaN}`); // "NaN"

console.log(!!12); // true
console.log(!!0); // false
console.log(!!"0"); // true
console.log(!!"12"); // true
console.log(!!true); // true
console.log(!!false); // false
console.log(!!undefined); // false
console.log(!!null); // false
console.log(!!NaN); // false