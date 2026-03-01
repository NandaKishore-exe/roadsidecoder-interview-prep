// !--- Variable and Scopes ---!

// var vs let vs const
// scope types - global scope, block scope, function scope

// {
//   let b = 10; // let is block scoped.

//   console.log(b);

//   const c = 30; // const is also block scoped.

//   console.log(c);
// }

// console.log(b); // throws reference error "Uncaught ReferenceError: b is not defined"

// function x() {
//   var d = 40; // var is function scoped.
//   console.log(d);
// }

// x();

// console.log(d); //"Uncaught ReferenceError: d is not defined"

// IMPORTANT:
//If var is inside a block but not inside a function,
// it becomes global scope.

// !--- Variable Declaration ---!

// var → can be redeclared and reassigned, function scoped

// let → cannot be redeclared in the same scope,
//        but can be reassigned, block scoped

// const → cannot be redeclared or reassigned,
//         must be initialized, block scoped

// !--- Variable Shadowing ---!

//Variable shadowing happens when a variable declared in an inner scope (block/function) has the same name as a variable in an outer scope.
// Inside that inner scope, the inner variable “hides” or “overrides access to” the outer variable.
// The outer variable still exists — but it cannot be accessed from that inner scope because the closer scope takes priority.

// function test() {
//   let a = "Hello";

//   if (true) {
//     let a = "Hi";
//     console.log(a);
//   }

//   console.log(a);
// }

// test();

// !--- illegal Shadowing ---!

// Illegal shadowing happens when JavaScript does not allow a variable in an inner scope to use the same name as one in the outer scope because it would break scope rules.

// let xyz = 10;

// {
//   var xyz = 20;
// }

// so in above example var avoids block scope and shift back to global scope then it will throw variable is already present and cannot redeclare
// Uncaught SyntaxError: Identifier 'xyz' has already been declared

// ✅ Allowed shadowing

// let → let

// const → const

// let → const

// var inside function over global

// ❌ Illegal shadowing

// let outside + var inside block

// const outside + var inside block

// !--- Hoisting ---!

// Hoisting is JavaScript’s behavior of moving variable declarations to the top of their scope.

// console.log(count);

// var count = 1;

// When we access a var variable before declaration,
// JavaScript does not throw an error.
// Instead it prints "undefined".

// This happens because of hoisting.
// During the execution context creation phase,
// variables declared with var are stored in memory
// and initialized with value "undefined".
// Later, during code execution, the actual value is assigned.

console.log(count2);
console.log(count);

let count2 = 2;
const count = 1;

//let and const variables are hoisted but stay in the Temporal Dead Zone until their declaration line, so accessing them before declaration throws a ReferenceError.
// TDZ - period between when a let/const variable is hoisted (start of its scope) and when it actually gets initialized (the line where you declare it).

{
  // ← start of scope (block starts here)
  console.log(x); // TDZ — x hoisted but not initialized
  console.log(x); // TDZ — still can't access
  let x = 10; // ← actual declaration line (TDZ ends HERE)
  console.log(x); // ✅ 10
}
