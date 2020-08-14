// 1. Strict   a === b
// 2. Loose   a == b
// 3. Same Value   Object.is(a,b)

// Strict
console.log(2 === 2);
console.log("mayonnaise" === "ketchup");

console.log(NaN === NaN); // is false, although they are the same value.
console.log(-0 === 0);
console.log(0 === -0); // are true, although they are different values.

// Loose
console.log();
console.log([[]] == "");
console.log(true == [1]);
console.log(false == [0]);

// Same Value
let dwarves = 7;
let continents = "7";
let worldWonders = 3 + 4;

console.log();
console.log(Object.is(dwarves, continents));
console.log(Object.is(continents, worldWonders));
console.log(Object.is(worldWonders, dwarves));

// Ways to check NaN
let x = 3;
Number.isNaN(x);
Object.is(x, NaN);
x !== x;

// on reference-type variables
// == and === checks the reference, not the value
let mArr = ["Hi"];
let mArr2 = mArr;

console.log();
console.log(mArr === mArr2);

let arr1 = ["Hi!"];
let arr2 = ["Hi!"];
console.log(arr1 === arr2);
