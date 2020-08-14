class Chainable {
  firstMethod() {
    console.log("This is the first method");
    return this;
  }

  secondMethod() {
    console.log("This is the second method");
    return this;
  }

  thirdMethod() {
    console.log("This is the third method");
    return this;
  }
}

const chainableInstance = new Chainable();

chainableInstance.firstMethod().secondMethod().thirdMethod();
