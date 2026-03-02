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

function createBase(a) {
  return function (b) {
    return b + a;
  };
}

var addSix = createBase(6);

console.log(addSix(10)); // returns 16
console.log(addSix(21)); // returns 27
