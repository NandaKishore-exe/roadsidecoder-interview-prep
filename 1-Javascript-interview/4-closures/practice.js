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

// Follow up question then how will you 0 1 2 here using var variable itself

for (var i = 0; i < 3; i++) {
  function inner(i) {
    setTimeout(function log() {
      console.log(i);
    }, 1000);
  }
  inner(i);
}
