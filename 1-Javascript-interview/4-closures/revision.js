// 📅 JavaScript Deep Dive – Day Log

// Topics: Lexical Scope, Closures, setTimeout Loop Trap, Private Variables, once() Pattern, Memoization
// Date: 4 March 2026

// Questions & Answers

// Lexical Scope Trap
// Question

let a = 1;

function test() {
  console.log(a);
}

function run() {
  let a = 5;
  test();
}

run();

// Answer
// 1

// Explanation
// JavaScript uses lexical scope. The function test is defined in the global scope,
// so it resolves variable a from the global environment (a = 1).
// Even though run() has a = 5, test() does not look there because
// scope is determined where the function is defined, not where it is called.

// Function Factory (Closure Creator)
// Question

function multiplyBy(a) {
  return function (b) {
    return a * b;
  };
}

const double = multiplyBy(2);

console.log(double(5));
console.log(double(10));

// Answer
// 10
// 20

// Explanation
// multiplyBy returns a function that remembers variable 'a'.
// Because of closure, the returned function keeps access to a = 2.
// So double(x) always calculates 2 * x.

// setTimeout Loop Trap
// Question

for (var i = 1; i <= 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}

// Answer
// 4
// 4
// 4

// Explanation
// var is function-scoped, not block-scoped. The loop finishes first and i becomes 4.
// When the setTimeout callbacks execute, they all reference the same variable i,
// which now equals 4.

// Fixing setTimeout using Closure
// Question

for (var i = 1; i <= 3; i++) {
  function wrapper(i) {
    setTimeout(function () {
      console.log(i);
    }, 1000);
  }
  wrapper(i);
}

// Answer
// 1
// 2
// 3

// Explanation
// Each call to wrapper(i) creates a new scope with its own i.
// The setTimeout callback closes over that specific value,
// so each iteration prints the correct number.

// Private Counter using Closure
// Question

function counter() {
  let count = 0;

  return {
    increment() {
      count++;
    },
    print() {
      console.log(count);
    },
  };
}

const c1 = counter();
const c2 = counter();

c1.increment();
c1.increment();

c2.increment();

c1.print();
c2.print();

// Answer
// 2
// 1

// Explanation
// Each call to counter() creates a new closure environment.
// c1 and c2 each have their own private 'count' variable.
// They do not share the same state.

// once() Pattern
// Question

function once(fn) {
  let called = false;

  return function () {
    if (!called) {
      called = true;
      fn();
    } else {
      console.log("Already executed");
    }
  };
}

const init = once(() => console.log("App initialized"));

init();
init();
init();

// Answer
// App initialized
// Already executed
// Already executed

// Explanation
// The closure keeps track of the 'called' variable.
// After the first execution, called becomes true,
// preventing the function from running again.

// Memoization Pattern
// Question

function memoize(fn) {
  let cache = {};

  return function (num) {
    if (cache[num]) {
      console.log("From cache");
      return cache[num];
    }

    console.log("Calculating...");
    const result = fn(num);
    cache[num] = result;

    return result;
  };
}

const square = memoize((n) => n * n);

console.log(square(5));
console.log(square(5));
console.log(square(6));

// Answer
// Calculating...
// 25
// From cache
// 25
// Calculating...
// 36

// Explanation
// The closure keeps the cache object alive across function calls.
// When the same input is used again, the cached result is returned
// instead of recomputing.

// Multiple Closure Instances
// Question

function outer() {
  let count = 0;

  return function () {
    console.log(++count);
  };
}

const fn1 = outer();
const fn2 = outer();

fn1();
fn1();
fn2();
fn2();

// Answer
// 1
// 2
// 1
// 2

// Explanation
// Each call to outer() creates a new closure with its own 'count'.
// fn1 and fn2 maintain separate states.

// Mistakes & Lessons

// setTimeout Loop Trap
// Your Mistake: Initially thought output would be 3,3,3.
// Correction: The loop finishes first, so i becomes 4.
// All callbacks share the same variable reference.

// Function Factory Question
// Your Mistake: Second result was answered as 29.
// Correction: Closure remembers a = 2, so the result is 2 * 10 = 20.

// Today's Score

// 85 / 100 — Strong understanding of closures, lexical scope, and real-world closure patterns.

// Improvement Plan

// Practice more closure patterns used in real applications:
// - debounce
// - throttle
// - advanced memoization
// - closure in async loops
// - React stale closure issues

// Continue solving 2–3 closure problems daily to strengthen intuition.
