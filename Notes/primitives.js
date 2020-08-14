// primitive values are immutable  -> values are immutable, variables are not
let myName = "Alper";
myName[0] = "B";

let x = 5;
x = 6;

console.log(myName, x);

// undefined -> unintentionally missing value
console.log(typeof undefined);

let mySurname;
console.log(mySurname);

// null -> intentionally missing value
// historical accident - null
console.log(typeof null);

// bool <3

// numbers
// https://floating-point-gui.de/formats/fp/?ck_subscriber_id=724329856
console.log(0.1 + 0.2 === 0.3); // false
console.log(0.1 + 0.2 === 0.30000000000000004); // true

let scale = 0;
let a = 1 / scale;
let b = 0 / scale;
let c = -a;
let d = 1 / c;

console.log(a, b, c, d);
