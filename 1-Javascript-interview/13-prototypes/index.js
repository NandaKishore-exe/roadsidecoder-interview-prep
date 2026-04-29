let obj = {
  name: "Nanda Kishore",
  age: 28,
};

let num = 10;
let name = "RoadsideCoder";
let bool = true;

function add(a, b) {
  return a + b;
}

// console.log(add(1, 2));
// console.log(add.__proto__); // Function.prototype
// console.log(add.__proto__.__proto__); // Object.prototype

// Prototype Chaining

let person = {
  name: "peter",
  age: 25,
  // toString: () => {
  //   console.log("converts to string");
  // },
};

let additionalObj = {
  name: "john",
  userName: "RoadsideCoder",
  alias: function () {
    console.log(`${this.name} is also known as ${this.userName}`);
  },
};

person.__proto__ = additionalObj; // not recommended to use in production

console.log(person.alias());

// Prototype Inheritance

// Defined a Constructor Function
function Animal(name) {
  this.name = name;
}

// Add a method to the prototype
Animal.prototype.sayName = function () {
  console.log("My name is " + this.name);
};

const animalOne = new Animal("Tiger");

function Dog(name, breed) {
  Animal.call(this, name);
  this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype);

Dog.prototype.constructor = Dog;

Dog.prototype.bark = function () {
  console.log("woof!");
};

let dogOne = new Dog("Tommy", "labrador");
