// call, bind, apply in javascript (Explicit Binding)

// Question 1 - What is call()?

// call() is a method that invokes a function immediately and allows you to explicitly set the value of this, passing arguments individually.

var obj = { name: "nanda kishore" };

// function sayHello(age) {
//   return `Hello ${this.name} is ${age}`;
// }

// console.log(sayHello.call(obj, 28)); // Hello nanda kishore

// Question 2 - What is apply()?

// apply() is similar to call(), but it accepts arguments as an array instead of individual values.

function greet(age, profession) {
  return `Hello ${this.name} is ${age} and is an ${profession}`;
}

// console.log(greet.apply(obj, [28, "software engineer"]));

// Question 3 - What is bind()?

// bind() returns a new function with this permanently bound to a specified object, without executing it immediately.

const bindFunc = greet.bind(obj, 28, "software engineer");

// console.log(bindFunc());

// Question 4 - Output based Question

// const person = { name: "peter parker" };

// function sayHi(age) {
//   return `${this.name} is ${age}`;
// }

// console.log(sayHi.call(person, 24)); // peter parker is 24
// console.log(sayHi.bind(person, 24)); // returns function

// Question 5 - Call with function inside object

// const age = 10;

// var person2 = {
//   name: "Luffy",
//   age: 20,
//   getAge: function () {
//     return this.age;
//   },
// };

// var person3 = { age: 24 };

// console.log(person2.getAge.call(person3)); // 24

// Question 6 - What is the Output?

// var status = "😎";

// setTimeout(() => {
//   const status = "😍";

//   const data = {
//     status: "🥑",
//     getStatus() {
//       return this.status;
//     },
//   };

//   console.log(data.getStatus()); // 🥑
//   console.log(data.getStatus.call(this)); // 😎
// }, 0);

// Question 7 - Call printAnimals such that it prints all animals

const animals = [
  { species: "Lion", name: "King" },
  { species: "Whale", name: "Queen" },
];

function printAnimals(i) {
  this.print = function () {
    console.log("#" + i + " " + this.species + ": " + this.name);
  };

  this.print();
}

for (let i = 0; i < animals.length; i++) {
  printAnimals.call(animals[i], i);
}

// Question 8 - Append an array to another array

const arr = [0, 1, 2];
const elements = ["nanda", "peter"];

arr.push.apply(arr, elements);

console.log(arr);

// Question 9 - Using apply to enhance Built in functions - Find min/max number in an array

const nums = [5, 6, 2, 3, 7];

console.log(Math.max.apply(null, nums));

console.log(Math.min.apply(null, nums));

// Question 10 - Bound Function

function f() {
  console.log(this);
}

let user = {
  g: f.bind(null),
};

user.g();

// Question 11 - Bind Chaining

function f() {
  console.log(this.name);
}

f = f.bind({ name: "John" }).bind({ name: "Adam" });

f(); // Output - Adam
