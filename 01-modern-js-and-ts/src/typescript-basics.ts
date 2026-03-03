/**
 * TypeScript = Structurally Typed Type System
 *
 * Only type-check at build, **NOT** at runtime!
 */

import "./style.css";

let myString = "Johan";

myString = "Pelle";
// myString = 42;  // nope!

let myNumber: number;
myNumber = 1337;
// myNumber = "LOLCATS!!";  // also nope!

const greet = (name: string, age: number) => {
	console.log(`Hello, ${name}! You are ${age.toFixed()} years old.`);
}
greet("Johan", 43);

const add = (a: number, b: number, prefix?: string): string => {
	const sum = a + b;
	return prefix ? `${prefix} ${sum}` : sum.toString();
}

console.log(add(3, 5));         // "8"
console.log(add(3, 5, "Summa:")) // "Summa: 8"
