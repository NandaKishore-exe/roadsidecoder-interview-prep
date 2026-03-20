// Question 1 - What is the output?

const user = {
  firstName: "nanda",
  getName() {
    const firstName = "kishore";
    return this.firstName;
  },
};

// console.log(user.getName()); // "nanda"

// Question 2 - What is the result of accessing its ref? why?

function makeUser() {
  return {
    name: "John",
    ref: this,
  };
}

let user2 = makeUser();

// console.log(user2.ref.name); // It prints empty because window.name is an empty string by default, this is determined at function execution time.

// Follow up question how will you fix this and print john.

function makeUserFix() {
  return {
    name: "John",
    ref() {
      return this;
    },
  };
}

let user3 = makeUserFix();

// console.log(user3.ref().name); // output - John

// Question 3 - What is the output

// 📌 Concept: Calling object methods inside setTimeout

// When we pass an object method directly into setTimeout:
// setTimeout(person.logMessage, 1000);

// ❗ IMPORTANT:
// We are NOT calling the method using the object (person.logMessage())
// Instead, we are passing a reference to the function

// Internally it behaves like:
// const fn = person.logMessage;
// setTimeout(fn, 1000);

// 🔥 What happens to `this`?
// - The function is executed as a normal function (fn())
// - So `this` is NOT bound to `person` anymore

// 🧠 Result:
// - In non-strict mode → `this` becomes global object (window)
// - In strict mode → `this` becomes undefined

// So this line:
// console.log(this.name);

// Becomes:
// window.name  // usually "" (empty string)
// OR
// undefined (in strict mode)

// ❌ Final Output:
// undefined OR empty string (NOT "nanda kishore")

const person = {
  name: "nanda kishore",
  logMessage() {
    console.log(this.name);
  },
};

// setTimeout(person.logMessage, 1000);

// -------------------------------------------------------------

// ✅ Solution 1: Use bind (recommended for interviews)
// setTimeout(person.logMessage.bind(person), 1000);

// ✔ Ensures `this` always refers to `person`

// -------------------------------------------------------------

// ✅ Solution 2: Use arrow function
// setTimeout(() => person.logMessage(), 1000);

// ✔ Arrow function preserves context by calling method correctly

// -------------------------------------------------------------

// 🧠 Golden Rule:
// 🔥 "When a method is passed as a callback, it loses its `this`"

// Always ensure proper binding when passing methods as callbacks

// Question 4 - What is the Output?

const member = {
  name: "peter parker",
  greet() {
    return `Hello ${this.name}`;
  },
  farwell: () => `GoodBye ${this.name}`,
};

// console.log(member.greet()); // peter parker
// console.log(member.farwell()); // empty string or undefined, because arrow functions does not have own this so it points to global object window

// fix use normal function inside the arrow function

const member2 = {
  name: "peter parker",
  greet() {
    return `Hello ${this.name}`;
  },
  farwell() {
    const fn = () => console.log(`GoodBye ${this.name}`);
    fn();
  },
};

// console.log(member2.farwell()); // GoodBye peter parker

// Question 5 - Create an object calculator

let calculator = {
  // your code
  read() {
    this.a = +prompt("a =", 0);
    this.b = +prompt("b =", 0);
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
};

// calculator.read();

// console.log(calculator.sum());
// console.log(calculator.mul());

// Question 6 - What will be the output

var length = 4;

function callback() {
  console.log(this.length);
}

const object = {
  length: 5,
  method(fn) {
    fn();
  },
};

object.method(callback); // 4

// same question with different style

var length = 4;

function callback2() {
  console.log(this.length);
}

const object2 = {
  length: 5,
  method() {
    console.log(arguments);
    arguments[0]();
  },
};

object2.method(callback2, 2, 3); // 3 - This is method call on arguments object[callback2, 2, 3] so here it will point to this array of object and .length will print total length 3

// Question 6: Implement this code

const calc = {
  total: 0,
  add(a) {
    this.total = this.total + a;
    return this;
  },
  multiply(a) {
    this.total = this.total * a;
    return this;
  },
  subtract(a) {
    this.total = this.total - a;
    return this;
  },
};

const result = calc.add(10).multiply(5).subtract(30);

console.log(result);
