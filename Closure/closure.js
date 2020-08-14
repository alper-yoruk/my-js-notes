// returning a function from another function
function createFunction() {
  function mulptiplyBy2(num) {
    return num * 2;
  }
  return mulptiplyBy2;
}

const generatedFunc = createFunction();
const result = generatedFunc(3);
console.log(result, generatedFunc);

// calling a function in the same function call as it was defined
function outer() {
  let counter = 0;
  function incrementCounter() {
    counter++;
  }
  incrementCounter();
}

outer();

// calling a function outside of the function call in which it was defined
function outer() {
  let counter = 0;
  function incrementCounter() {
    counter++;
  }
  return incrementCounter;
}

const myNewFunction = outer();
myNewFunction();
myNewFunction();
