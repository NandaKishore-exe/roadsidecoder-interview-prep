// Currying in javascript
// Example f(a,b) into f(a)(b)

// Currying is a functional programming technique where a function that takes multiple arguments is transformed into a sequence of functions that each take a single argument.

function f(a) {
  return function (b) {
    console.log(a, b);
  };
}

// console.log(f(5)(6));

// Question 1 - sum(2)(6)(1)

// function sum(a) {
//   return function (b) {
//     return function (c) {
//       return a + b + c;
//     };
//   };
// }

// console.log(sum(2)(6)(1));

/* Question 2 -

evaluate("sum")(4)(2) => 6
evaluate("multiply")(4)(2) => 8
evaluate("divide")(4)(2) => 2
evaluate("substract")(4)(2) => 2

*/

function evaluate(opType) {
  return function (a) {
    return function (b) {
      if (opType === "sum") return a + b;
      if (opType === "subtract") return a - b;
      if (opType === "multiply") return a * b;
      if (opType === "divide") return a / b;
      return "Invalid Operation";
    };
  };
}

// const mul = evaluate("multiply");

// console.log(mul(4)(2));

// console.log(evaluate("sum")(4)(2));
// console.log(evaluate("multiply")(4)(2));
// console.log(evaluate("divide")(4)(2));
// console.log(evaluate("substract")(4)(2));

// Question 3 - Implement Infinite Currying -> sum(1)(2)(3)...(n)

// function sum(a) {
//   return function (b) {
//     if (b) return sum(a + b);
//     return a;
//   };
// }

// console.log(sum(3)(3)(3)());

// Question 4 - currying and partial application

// Currying transforms f(a,b,c) into f(a)(b)(c) — always one argument per call.

// Partial Application pre-fills some arguments and returns a function that takes the rest in one go.

const add = (a) => (b) => (c) => a + b + c;

// add(1)(2)(3); // 6

// Each call takes EXACTLY one argument

// function add(a, b, c) {
//   return a + b + c;
// }

// Fix first argument as 1
// const addOne = add(1);

// addOne(2, 3); // 6  ← pass remaining TWO at once

// Question 5 - manipulating the DOM

function updateElementText(id) {
  return function (content) {
    document.querySelector("#" + id).textContent = content;
    console.log(content);
  };
}

const updateHeader = updateElementText("heading");

updateHeader("nanda");

// Question 6 - curry() implementation
// converts f(a,b,c) into f(a)(b)(c)

function curry(fn) {
  return function curriedFunc(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    } else {
      return function (...next) {
        return curriedFunc(...args, ...next);
      };
    }
  };
}

const sum = (a, b, c) => a + b + c;

const totalSum = curry(sum);

console.log(totalSum(1)(2)(3));
