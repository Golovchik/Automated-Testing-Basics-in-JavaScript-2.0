//1.Perform addition of various types (string + boolean, string + number, number + boolean)
console.log(" 12 " + true); // 12 true
console.log(false + "12"); // false12 

console.log("12" + 5); // "125"

console.log(12 + true); // 13
console.log(12 + false); // 12


//2.Perform multiplication of various types (string * boolean, string * number, number * boolean)
console.log("12 " * true); // 12
console.log("12 " * false); // 0

console.log("12 " * 2); // 24

console.log(12 * true); // 12
console.log(12 * false); // 0


//3.Divide different types (string / boolean, string / number, number / Boolean)
console.log("12 " / true); // 12
console.log("12 " / false); // Infinity

console.log("12 " / 2); // 6

console.log(12 / true); // 12
console.log(12 / false); // Infinity

//4.Perform explicit conversion (number, string, boolean)
console.log(Number(12)); // 12
console.log(Number(" 12 ")); // 12
console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(Number(undefined)); // NaN
console.log(Number(null)); // 0
console.log(Number(NaN)); // NaN

console.log(String(12)); // "12"
console.log(String(" 12 ")); // " 12 "
console.log(String(true)); // "true"
console.log(String(false)); // "false"
console.log(String(undefined)); // "undefined"
console.log(String(null)); // "null"
console.log(String(NaN)); // "NaN"

console.log(Boolean(12)); // true
console.log(Boolean(0)); // false
console.log(Boolean("0")); // true
console.log(Boolean(" 12 ")); // true
console.log(Boolean(true)); // true
console.log(Boolean(false)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(null)); // false
console.log(Boolean(NaN)); // false