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

// function job() {
//   return new Promise(function (resolve, reject) {
//     reject();
//   });
// }

// let promise = job();

// promise
//   .then(function () {
//     console.log("Success 1");
//   })
//   .then(function () {
//     console.log("Success 2");
//   })
//   .then(function () {
//     console.log("Success 3");
//   })
//   .catch(function () {
//     console.log("Error 1");
//   })
//   .then(function () {
//     console.log("Success 4");
//   });

// Question 5 - what is the output?

/*
  success
  error
  Error Caught

*/

// function job(state) {
//   return new Promise(function (resolve, reject) {
//     if (state) {
//       resolve("success");
//     } else {
//       reject("error");
//     }
//   });
// }

// let promise = job(true);

// promise
//   .then(function (data) {
//     console.log(data);

//     return job(false);
//   })
//   .catch(function (error) {
//     console.log(error);

//     return "Error Caught";
//   })
//   .then(function (data) {
//     console.log(data);

//     return job(true);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

// Question 6 - What's the output?

// function job(state) {
//   return new Promise(function (resolve, reject) {
//     if (state) {
//       resolve("success");
//     } else {
//       reject("error");
//     }
//   });
// }

// let promise = job(true); // resolve("success")

// promise
//   .then(function (data) {
//     console.log(data); // success
//     return job(true);
//   })
//   .then(function (data) {
//     if (data !== "victory") {
//       throw "Defeat";
//     }
//     return job(true);
//   })
//   .then(function (data) {
//     console.log(data);
//   })
//   .catch(function (error) {
//     console.log(error); // Defeat
//     return job(false);
//   })
//   .then(function (data) {
//     console.log(data);
//     return job(true);
//   })
//   .catch(function (error) {
//     console.log(error); // error
//     return "Error Caught";
//   })
//   .then(function (data) {
//     console.log(data); // Error Caught
//     return new Error("test");
//   })
//   .then(function (data) {
//     console.log("sucess:", data.message); // Success: test
//   })
//   .catch(function (data) {
//     console.log("error:", data.message);
//   });

// Question 7 - Promise Chaining

// const firstPromise = new Promise((resolve, reject) => {
//   resolve("first!");
// });

// const secondPromise = new Promise((resolve, reject) => {
//   resolve(firstPromise);
// });

// secondPromise.then((res) => res).then((res) => console.log(res));

// Question 8 - Rewrite this example code using "async/await" instead of ".then/.catch"

// function loadJson(url) {
//   return fetch(url).then((response) => {
//     if (response.status == 200) {
//       return response.json();
//     } else {
//       throw new Error(response.status);
//     }
//   });
// }

// loadJson("https://fakeurl.com/no-such-user.json").catch((err) =>
//   console.log(err),
// );

// let url = "https://fakeurl.com/no-such-user.json";

// const loadJson = async () => {
//   const response = await fetch(url);
//   if (response.status == 200) {
//     let json = await response.json();
//     return json;
//   } else {
//     throw new Error(response.status);
//   }
// };

// console.log(loadJson(url));

// Question 9: solve promise recursively

// function importantAction(username) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`This is an important action 3 ${username}`);
//     }, 0);
//   });
// }
// function shareTheVideo(video) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`share this ${video} video`);
//     }, 1000);
//   });
// }
// function likeTheVideo(video) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`Like this ${video} video`);
//     }, 1000);
//   });
// }

// function promRecurse(funcPromises) {
//   if (funcPromises.length === 0) return;

//   const currPromise = funcPromises.shift();

//   currPromise.then((res) => console.log(res)).catch((err) => console.log(err));

//   promRecurse(funcPromises);
// }

// promRecurse([
//   importantAction("Roadside Coder"),
//   likeTheVideo("Javascript Interview Questions"),
//   shareTheVideo("Javascript Interview Questions"),
// ]);

// Question 10 - Promise Polyfill Implementation

// Building block of promise poly fill

// step 1 - create empty promise
