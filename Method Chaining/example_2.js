class Arithmetic {
  constructor() {
    this.value = 0;
  }

  sum(...args) {
    this.value = args.reduce((sum, current) => sum + current, 0);
    return this;
  }

  add(value) {
    this.value += value;
    return this;
  }

  substract(value) {
    this.value -= value;
    return this;
  }

  average(...args) {
    this.value = args.length
      ? this.sum(...args).value / args.length
      : undefined;
    return this;
  }
}

a = new Arithmetic();
a.sum(1, 3, 6).substract(3).add(4).value;

console.log(a);
