// if it walks like a duck and quacks like a duck, then it must be a duck
var duck = {
  appearance: "feathers",
  quack: function duck_quack(what) {
    console.log(what + "quack quack");
  },
  color: "black",
};

var someAnimal = {
  appearance: "feathers",
  quack: function animal_quack(what) {
    console.log(what + " whoof-whoof!");
  },
  eyes: "yellow",
};

function check(who) {
  if (who.appearance == "feathers" && typeof who.quack == "function") {
    who.quack("I look like a duck!\n");
    return true;
  }
  return false;
}

check(duck);
check(someAnimal);
