// Promises in Javascript

// Question 1 - What is the output?

// start
// 1
// end
// 2

// console.log("start");

// const promise1 = new Promise((resolve, reject) => {
//   console.log(1);
//   resolve(2);
// });

// promise1.then((res) => console.log(res));

// console.log("end");

// Question 2 - What is the output?

// start 1 3 end 2

// console.log("start");

// const promise1 = new Promise((resolve, reject) => {
//   console.log(1);
//   resolve(2);
//   console.log(3);
// });

// promise1.then((res) => console.log(res));

// console.log("end");

// tricky - when interviewer removes resolve(2) and asks the output it will be (start, 1, 3, end) imp thing is it will not go to .then because there is no resolve.

// Question 3 - What's the output?

// start, middle, 1, end, success

// console.log("start");

// const fn = () =>
//   new Promise((resolve, reject) => {
//     console.log(1);
//     resolve("success");
//   });

// console.log("middle");

// fn().then((res) => {
//   console.log(res);
// });

// console.log("end");

// Question 4 - what is the output

function job() {
  return new Promise(function (resolve, reject) {
    reject();
  });
}

let promise = job();

promise
  .then(function () {
    console.log("Success 1");
  })
  .then(function () {
    console.log("Success 2");
  })
  .then(function () {
    console.log("Success 3");
  })
  .catch(function () {
    console.log("Error 1");
  })
  .then(function () {
    console.log("Success 4");
  });
