// Question 1 - What will be logged to console?

// let count = 0;

// (function printCount() {
//   if (count === 0) {
//     let count = 1; // variable shadowing happens here
//     console.log(count); // 1
//   }

//   console.log(count); // 0
// })();

// Question 2 - Write a function that would allow you to do this?

// function createBase(a) {
//   return function (b) {
//     return b + a;
//   };
// }

// var addSix = createBase(6);

// console.log(addSix(10)); // returns 16
// console.log(addSix(21)); // returns 27

// Question 3 - Time Optimization

// function find() {
//   let a = [];
//   for (let i = 0; i < 1000000; i++) {
//     a[i] = i * i;
//   }

//   return function (index) {
//     console.log(a[index]);
//   };
// }

// console.time("6");
// const closure = find();
// closure(6);
// console.timeEnd("6");
// console.time("50");
// closure(50);
// console.timeEnd("50");

// Question 4 - Block Scope and setTimeout

// function a() {
//   for (var i = 0; i < 3; i++) {
//     setTimeout(function log() {
//       console.log(i);
//     }, 1000);
//   }
// }

// a(); // it will print 3 for 3 times

// Follow up question then how will you print 0 1 2 here using var variable itself

// for (var i = 0; i < 3; i++) {
//   function inner(i) {
//     setTimeout(function log() {
//       console.log(i);
//     }, 1000);
//   }
//   inner(i);
// }

// Question 5 - How would you use a closure to create a private counter

function counter() {
  var _counter = 0;

  function add(increment) {
    _counter += increment;
  }

  function retrive() {
    return "counter =" + _counter;
  }

  return {
    add,
    retrive,
  };
}

const c = counter();
c.add(5);
c.add(10);

console.log(c.retrive());

// Question 6 : What is Module Pattern?

// The Module Pattern is a design pattern used to:

// Encapsulate code

// Create private variables & methods

// Expose only selected parts as public API

// Avoid polluting the global scope

// It uses:

// ✅ IIFE (Immediately Invoked Function Expression)

// ✅ Closures

var module = (function () {
  function privateMethod() {
    // do something
  }
  return {
    publicMethod: function () {
      // can call private method
    },
  };
})();

// Question 7: Make this run only once

let view;

function likeTheVideo() {
  let called = 0;

  return function () {
    if (called > 0) {
      console.log("Already subscribed");
    } else {
      view = "my channel";
      console.log("subscribe to", view);
      called++;
    }
  };
}

let isSubscribed = likeTheVideo();

isSubscribed(); // subscribe to my channel
isSubscribed(); // Already subscribed

// Question 8: Once Polyfill

function once(func, context) {
  let ran;
  return function () {
    if (func) {
      ran = func.apply(context || this, arguments);
      func = null;
    }
    return ran;
  };
}

const hello = once((a, b) => console.log("hello", a, b));

hello(1, 2);
hello(1, 2);

// Question 9 : polyfill memoize

//memoization - Memoization is an optimization technique where we cache function results based on arguments. If the same arguments are passed again, the cached result is returned instead of recalculating. It uses closures to persist the cache.

function myMemoize(fn, context) {
  const res = {};

  return function (...args) {
    var argsCache = JSON.stringify(args);

    if (!res[argsCache]) {
      res[argsCache] = fn.call(context || this, ...args);
    }

    return res[argsCache];
  };
}

const clumsyProduct = (num1, num2) => {
  for (let i = 1; i <= 1000000000; i++) {}
  return num1 * num2;
};

const memoizedClumsyProduct = myMemoize(clumsyProduct);

console.time("First call");
console.log(memoizedClumsyProduct(9467, 7689));
console.timeEnd("First call");
console.time("second call");
console.log(memoizedClumsyProduct(9467, 7689));
console.timeEnd("second call");

// Question 10: Difference between closure and scope

// Scope determines where variables are accessible in your code. It is about visibility.

// A closure is when a function remembers variables from its outer scope even after the outer function has finished executing.
