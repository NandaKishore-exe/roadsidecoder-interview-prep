// Functions in Javascript

// 1 - what is functions declaration?
// A function declaration in JavaScript is a way to define a function using the function keyword, followed by a name.

function square(num) {
  return num * num;
}

// 2 - what is function expression?
// A function expression is when you create a function and assign it to a variable.

const greet = function (name) {
  return `hello ${name}`;
};

console.log(greet("nanda"));

// 3 - what is first class functions?
//In JavaScript, functions are first-class citizens, meaning they can be treated like any other value. They can be assigned to variables, passed as arguments, returned from other functions, and stored in data structures like arrays and objects.

function displaySquare(fn) {
  return `The square is ${fn(10)}`;
}
console.log(displaySquare(square));

// 4 - what is IIFE?
// It is a function that runs immediately after it is defined.

console.log(
  (function (name) {
    return `I'm ${name}`;
  })("nanda"),
);

// 5 - IIFE - O/P based question?

(function (x) {
  return (function (y) {
    console.log(x); // 1
  })(2);
})(1);
