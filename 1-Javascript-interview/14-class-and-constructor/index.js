// class and constructor
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(this.name + " makes noise");
  }
}

const dog = new Animal("Tommy");
dog.speak();
