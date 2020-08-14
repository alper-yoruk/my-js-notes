// Rest
function myFunc(a, b, ...args) {
  console.log(a);
  console.log(b);
  console.log(args);
}

myFunc(22, 98, 43, 3, 26);

function myFunc2(...[x, y, z]) {
  console.log(x * y * z);
}

myFunc2(1);
myFunc2(1, 2, 3);
myFunc2(1, 2, 3, 4);

// Spread
var inputs = ["a", "b", "c", "d", "e", "f"];
myFunc(...inputs);

const featured = ["Deep Dish", "Pepperoni", "Hawaiian"];
const specialty = ["Meatzza", "Spicy Mama", "Margherita"];

const pizzas = [...featured, "veg pizza", ...specialty];
console.log(pizzas);

const obj1 = { foo: "bar", x: 42 };
const obj2 = { foo: "baz", y: 13 };

const clonedObj = { ...obj1 };
const updatedObj = { ...obj1, x: 21 };
const mergedObj = { ...obj1, ...obj2 };
console.log(clonedObj, updatedObj, mergedObj);
