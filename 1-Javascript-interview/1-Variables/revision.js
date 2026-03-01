// 📅 JavaScript Deep Dive – Day Log

// Topics: Hoisting, Illegal Shadowing, Variable Shadowing, Scopes, Variable Declaration (var/let/const)
// Date: [Add today’s date]

// Questions & Answers:

// Variable Shadowing
// Question

// let a = 10;

// function test() {
//   let a = 20;
//   console.log(a);
// }

// test();
// console.log(a);

// Answer
// 20
// 10
// Explanation
// The function test has its own a (shadowing the outer a). Inside the function, it prints the inner a (20). Outside, it prints the global a (10).

// Illegal Shadowing
// Question

// let a = 100;

// if (true) {
//   var a = 200;
// }

// console.log(a);

// Answer
// SyntaxError: Identifier 'a' has already been declared
// Explanation
// var ignores block scope and tries to redeclare a in the same scope as let a, which is illegal. The code fails at compile time.

// Hoisting with var
// Question

// console.log(a);
// var a = 5;

// Answer
// undefined
// Explanation
// var a is hoisted and initialized with undefined. During execution, console.log(a) prints undefined before a = 5.

// Hoisting with let (TDZ)
// Question

// console.log(b);
// let b = 10;

// Answer
// ReferenceError: Cannot access 'b' before initialization
// Explanation
// let is hoisted but not initialized. Accessing b before its declaration is in the TDZ, causing a ReferenceError.

// Hoisting Inside Function
// Question

// var x = 1;

// function test() {
//   console.log(x);
//   var x = 2;
// }

// test();

// Answer
// undefined
// Explanation
// Inside the function, var x is hoisted as undefined. The console.log(x) refers to the inner x, which at that moment is undefined, not the outer x.

// Mistakes & Lessons:

// Question 2 (Illegal Shadowing)
// Your Mistake: You thought it would print 100.
// Correction: It never runs—this is a compile-time error due to illegal shadowing.

// Question 4 (TDZ)
// Your Mistake: You initially suggested let wasn’t in scope.
// Correction: let is in scope during hoisting, just uninitialized until its declaration line.

// Today's Score:

// 8/10 — Strong on hoisting and scope, just watch illegal shadowing details!

// Improvement Plan:

// Review compile-time vs runtime errors (illegal shadowing).

// Deepen understanding of TDZ nuances.
