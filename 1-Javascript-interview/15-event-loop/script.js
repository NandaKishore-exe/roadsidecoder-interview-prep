// Interview Questions on Event Loop

// Question 1 - what is event loop?

// The Event Loop in JavaScript is a mechanism responsible for managing asynchronous
// behavior in a single-threaded environment.
// It acts like a traffic controller, ensuring tasks are
// executed in an orderly manner by processing pending tasks in queues (microtasks and
// macrotasks).

// Question 2 - Why do we need the event loop to manage these task queue and microtask queue?

//The event loop is necessary to handle asynchronous operations in JavaScript effectively. It
// manages task queues and microtask queues to ensure that tasks are executed efficiently
// without blocking the main thread.

// Question 3 - What is the output?

// blockMainThread();

// console.log("start");

// function blockMainThread() {
//   const start = Date.now();
//   while (Date.now - start < 3000) {}
//   console.log("running...");
// }

// console.log("end");

// output
// running...
// start
// end

// Question 4 - What is the output?

// setTimeout(function a() {
//   console.log("a");
// }, 1000);
// setTimeout(function b() {
//   console.log("b");
// }, 500);
// setTimeout(function c() {
//   console.log("c");
// }, 0);

// function d() {
//   console.log("d runs");
// }

// d();

// output
// d Runs
// c
// b
// a

// Question 5 - What is the output?

// function a() {
//   for (var i = 0; i < 3; i++) {
//     setTimeout(function log() {
//       console.log(i);
//     }, i * 1000);
//   }
// }

// a();

//output
// 3
// 3
// 3

// Question 6 - What is the output?

Promise.resolve()
  .then(function a() {
    Promise.resolve().then(
      setTimeout(function d() {
        console.log("d Runs");
      }, 0),
    );
    Promise.resolve().then(function e() {
      console.log("e Runs");
    });
    throw new Error("Error Occured!");
    Promise.resolve().then(function f() {
      console.log("f Runs");
    });
  })
  .catch(function b() {
    console.log("b Runs");
  })
  .then(function c() {
    console.log("c Runs");
  });

// output
// e runs
// b runs
// c runs
// d runs

// Question 7 - What is the output?

function pause(millis) {
  return new Promise(function p(resolve) {
    setTimeout(function s() {
      resolve("resolved");
    }, millis);
  });
}

const start = Date.now();
console.log("Start");

pause(1000).then((res) => {
  const end = Date.now();
  const secs = (end - start) / 1000;
  console.log(res, ":", secs);
});

// output

// Start

// resolved: 1.03
