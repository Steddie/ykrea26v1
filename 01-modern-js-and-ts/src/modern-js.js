import "./style.css";

/**
 * 🥴
 */
var count = 1;

if (true) {
	var count = 2;
	console.log("(var) Inside if-statement:", count);  // 2
}

console.log("(var) Outside if-statement:", count);  // 2 😱


console.log("(var) x before declaration:", x);  // undefined - no error! 😱😱
var x = 10;
console.log("(var) x after declaration:", x);  // 10

function varTest() {
	var x = 5;
	console.log("(var) Inside varTest-function:", x);
}
varTest();
console.log("(var) After varTest-function:", x);

/**
 * 🤩
 */

let total = 5;
// let total = 42;  // nope! 🚔

if (true) {
	let total = 10;
	console.log("(let) Inside if-statement:", total);
}
console.log("(let) Outside if-statement:", total);

// console.log("(let) y before declaration:", y);  // Uncaught ReferenceError: can't access lexical declaration 'y' before initialization
// let y = 42;

// const msg = "Hello world!";
// msg = "Good night!";  // Uncaught TypeError: invalid assignment to const 'msg'


/**
 * Function Declaration vs Function Expression
 */

// Function Declaration
console.log("1 + 2 =", add(1, 2));  // Function Declarations are hoisted to the top of the scope
function add(a, b) {
	return a + b;
}

// Function Expression
const addExpression = function (a, b) {
	return a + b;
}
console.log("3 + 4 =", addExpression(3, 4));

// Arrow Function Expression
const addArrow = (a, b) => {
	return a + b;
}
console.log("4 + 5 =", addArrow(4, 5));

// Arrow function one-liner
const addArrowOneliner = (a, b) => a + b;
console.log("1332 + 5 =", addArrowOneliner(1332, 5));


// Default values and template literals
const sayHi = (name, time = "day") => {
	return `Good ${time}, ${name}!`;
	return "Good " + time + ", " + name + "!";
}
console.log(sayHi("YKREA26V1", "evening"));
console.log(sayHi("YKREA26V1"));
