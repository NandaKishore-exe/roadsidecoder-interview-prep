// Functions in Javascript

// 1 - what is functions declaration?
// A function declaration in JavaScript is a way to define a function using the function keyword, followed by a name.

// function square(num) {
//   return num * num;
// }

// 2 - what is function expression?
// A function expression is when you create a function and assign it to a variable.

// const greet = function (name) {
//   return `hello ${name}`;
// };

// console.log(greet("nanda"));

// 3 - what is first class functions?
//In JavaScript, functions are first-class citizens, meaning they can be treated like any other value. They can be assigned to variables, passed as arguments, returned from other functions, and stored in data structures like arrays and objects.

// function displaySquare(fn) {
//   return `The square is ${fn(10)}`;
// }
// console.log(displaySquare(square));

// 4 - what is IIFE?
// It is a function that runs immediately after it is defined.

// console.log(
//   (function (name) {
//     return `I'm ${name}`;
//   })("nanda"),
// );

// 5 - IIFE - O/P based question?

// (function (x) {
//   return (function (y) {
//     console.log(x); // 1
//   })(2);
// })(1);

// 6 - function scopes

// 1-Function scope means that variables declared inside a function are only accessible within that function and cannot be accessed from outside.

// function greet() {
//   let message = "Hello World";
//   console.log(message); // ✅ Works
// }

// greet();

// console.log(message); // ❌ ReferenceError

// 2-Variables declared outside the function can used inside the function.
// let name = "John";

// function sayName() {
//   console.log(name); // ✅ Works
// }

// sayName();

// 3-Local Variable Overrides Global

// let count = 10;

// function showCount() {
//   let count = 5; // shadowing
//   console.log(count);
// }

// showCount(); // 5
// console.log(count); // 10

// 4-All three var, let, const are function-scoped inside a function.

// function test() {
//   var a = 1;
//   let b = 2;
//   const c = 3;
// }

// console.log(a); // ❌
// console.log(b); // ❌
// console.log(c); // ❌

// important interview question - why var prints 5 here for 5 times?

// for (var i = 0; i < 5; i++) {
//   setTimeout(() => console.log(i), i * 1000);
// }

//var is function-scoped, not block-scoped.

// There is only one shared i variable for the entire loop.

// setTimeout is asynchronous.

// By the time the callbacks execute, the loop has already finished.

// After the loop finishes, i equals 5.

// Why does let fix it?

// let is block-scoped.

// In a for loop, JavaScript creates a new binding of i for each iteration.

// Each callback closes over its own separate i.

// Question 8 - Function Hoisting?
// JavaScript moves function declarations to the top of their scope before the code runs.
// So you can call a function before it is written in the code — if it is a function declaration.
// Function expressions are NOT fully hoisted

var x = 21;

var fun = function () {
  console.log(x); // undefined because inside we have same var x variable also new function execution context is created here and var will be hoisted here so it prints undefined.
  var x = 20;
};

// fun();

// Question 9 - Params vs Arguments

function square(num) {
  // values which we receive inside function are called params.
  console.log(num * num);
}

// square(5); // values passed during function call are called arguments.

// Question 10 - rest and speard operator

function mul(num1, num2) {
  console.log(num1 * num2);
}

var arr = [4, 6];

// console.log(mul(...arr)); // Spread operator takes values from an array and spreads them out into individual values.

function add(...nums) {
  // Rest operator collects multiple values into a single array parameter [].
  console.log(nums[0] + nums[1]);
}

var arrTwo = [10, 10];

// console.log(add(...arrTwo));

// JS rule - A rest parameter must be the final parameter in a function definition.
// const fn = (a, ...numbers, x, y) => {
//   console.log(x, y)
// };

// fn(1,2,3,4,5,6)

// Question 11 - what is callback function?

// A callback function is a function passed as an argument to another function, which is executed after some operation is completed.

// examples - map, filter, reduce, setTimeout, document.addEventListener("click", function() {})

function greet(name) {
  console.log("Hello " + name);
}

function processUser(callback) {
  const name = "Rahul";
  callback(name); // calling the callback
}

// processUser(greet);

// Question 12 - Arrow Functions

// Arrow functions are a shorter syntax for writing functions in JavaScript. They do not have their own this, arguments, or prototype.

const arrwFn = () => console.log(arguments); // doesn't have arguments throws error "Uncaught ReferenceError: arguments is not defined"

// arrwFn(1, 2, 3);

function normal() {
  console.log(arguments);
}

// normal(1, 2, 3);

// this keyword

const obj = {
  name: "Rahul",
  normal: function () {
    console.log("Hello " + this.name);
  },
  arrow: () => {
    console.log("Hello " + this.name);
  },
};

obj.normal(); // Rahul
obj.arrow(); // undefined
