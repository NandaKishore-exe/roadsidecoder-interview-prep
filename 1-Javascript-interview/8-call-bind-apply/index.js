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

f(); // Output - Adam - why because bind chaining does not override previous bindings; the first bind takes precedence.

// Question 12 - Fix the line 22 to make code work properly

function checkPassword(success, failed) {
  let password = prompt("Password?", "");
  if (password == "peter123") {
    success();
  } else {
    failed();
  }
}

let member = {
  name: "nanda",
  loginSuccesful() {
    console.log(`${this.name} logged in`);
  },
  loginFailed() {
    console.log(`${this.name} failed to log in`);
  },
};

// checkPassword(
//   member.loginSuccesful.bind(member),
//   member.loginFailed.bind(member),
// );

//Question 13 - Partial application for login function

function validatePassword(ok, fail) {
  let password = prompt("Password?", "");
  if (password == "123") ok();
  else fail();
}

let user2 = {
  name: "nanda kishore",
  login(result) {
    console.log(this.name + (result ? "login successful" : "login failed"));
  },
};

// validatePassword()

// validatePassword(user2.login.bind(user2, true), user2.login.bind(user2, false));

// Question 14 - Explicit Binding with Arrow Function

const age = 10;

var person = {
  name: "John",
  age: 20,
  getAgeArrow: () => console.log(this.age),
  getAge: function () {
    console.log(this.age);
  },
};

var person2 = { age: 24 };

person.getAgeArrow.call(person2); // Arrow function takes this from global scope, where age is not attached to window, so it prints undefined. Also, call cannot change this for arrow functions.
person.getAge.call(person2); // 24

// Question 15 - Polyfill for call, bind, apply

let car = {
  name: "verna",
  company: "Hyundai",
};

function purchaseCar(currency, price) {
  console.log(
    `I have bought ${this.name} - ${this.company} car for price ${currency}${price}`,
  );
}

Function.prototype.myCall = function (obj = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error(this + "It is not a callable function");
  }

  obj.fn = this;
  obj.fn(...args);
};

Function.prototype.myApply = function (obj = {}, args = []) {
  if (typeof this !== "function") {
    throw new Error(this + "It is not a callable function");
  }

  if (!Array.isArray(args)) {
    throw new TypeError("CreateListFromArryLike called on non objects");
  }

  obj.fn = this;
  obj.fn(...args);
};

Function.prototype.myBind = function (obj = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error(this + "cannot be bound as it's not callable");
  }

  obj.fn = this;
  return function (...newArgs) {
    return obj.fn(...args, ...newArgs);
  };
};

purchaseCar.myCall(car, "$", 1500000);
purchaseCar.myApply(car, ["$", 1500000]);

const bindFn = purchaseCar.myBind(car, "$");

console.log(bindFn(1500000));
