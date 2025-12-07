class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
    this.type = "animal";
  }
  describe() {
    console.log(`${this.name} is an ${this.type}.`)
  }
  run(speed) {
    this.speed = speed;
    console.log(`${this.name} runs with speed ${this.speed} kph.`);
  }
  stop() {
    this.speed = 0;
    console.log(`${this.name} stands still.`);
  }
}

class Rabbit extends Animal {
    constructor(name, earLength) {
        super(name); // call the constructor function of the parent, inherited Animal class
        this.earLength = earLength; // adds custom properties only for instances of Rabbit
        this.type = "Rabbit";
        }
  hide() {
    // custom function, also inherits from Animal
    console.log(`${this.name} hides!`);
  }
  stop () {
    super.stop(); //call the parent stop
    this.hide();
  }
}
let wildanimal = new Animal("Some wild animal");

let whiterabbit = new Rabbit("White rabbit", 3)
whiterabbit.run(50);
whiterabbit.stop();
whiterabbit.hide();
wildanimal.stop();
whiterabbit.describe();
wildanimal.describe();