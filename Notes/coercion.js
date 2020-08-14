// implicit coercion
console.log(typeof (12 + ""));
console.log(typeof ("15" * 2));
console.log(typeof ("15" - "11"));
console.log(undefined * 2);
console.log(undefined + 4);
console.log("Hello" + null);
console.log(true + true);
console.log(10 * [6]);
console.log(10 * [10, 20]);
console.log(1 + [10, 20]);
console.log(typeof (1 + [10, 20]));

let x;
if (x) {
  console.log("Who am I?");
}

let y = [];
if (y) {
  console.log("I will be logged.");
}

if (-1) {
  console.log("I will be logged.");
}

// explicit
console.log();
console.log(Number("25"));
console.log(Number(null));
console.log(Number("adana"));

console.log(String(null));
console.log(String([]));
