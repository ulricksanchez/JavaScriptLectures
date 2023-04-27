//String
const firstName = "Ryan";
// console.log(firstName);

// Number
const age = 30;
const temp = 98.9;

// Boolean
const hasKids = true;

//Null
const aptNumber = null;

// Undefined
/* let score;
console.log(score); */

const score = undefined;

// Symbol
const id = Symbol("id");

// BigInt
const n = 31415927538713238462n;

// Refence Types

const numbers = [1, 2, 3, 4];

const person = {
  fname: "Ryan",
};

function sayHello() {
  console.log("Hello");
}

const output = sayHello;
console.log(output, typeof output);
