// Objects in javascript

const user = {
  name: "nanda",
  age: 28,
  location: "chennai",
};

// accessing the property values
// console.log(user.name);
// console.log(user["name"]);

// deleting the object values
// delete user.age;

// console.log(user);

const property = "studentName";
const name = "Nanda";

const studentData = {
  [property]: name, // add square braces to set the property
};

// console.log(studentData);

// iterating through object

// for (key in user) {
//   console.log(user[key]);
// }

// Question 1 - what is the output

const obj = {
  a: "one",
  b: "two",
  a: "three",
};

// console.log(obj); // {a: "three", b: "two"}

// Question 2 - create a function multiplyByTwo(obj) that multiplies all numeric property values of nums by 2.

let nums = {
  a: 100,
  b: 200,
  title: "My nums",
};

function multiplyByTwo(obj) {
  for (key in obj) {
    if (typeof obj[key] === "number") {
      obj[key] = obj[key] * 2;
    }
  }
  console.log(obj);
}

// console.log(multiplyByTwo(nums));

// Question 3 - What is the output of the following code

const a = {};

const b = { key: "b" };

const c = { key: "c" };

/* In JavaScript objects, property keys can only be:

- string

- symbol

- it should Not be objects.

So when you use an object as a key, JavaScript implicitly converts it to a string. */

a[b] = 453;

a[c] = 123;

console.log(a); // output - { "[object Object]": 123 }

// Question 4 - what is JSON.stringify and JSON.parse

const user2 = {
  name: "nanda",
  age: 27,
};

const strObj = JSON.stringify(user2);

console.log(strObj);

console.log(JSON.parse(strObj));

// Question 5 - what is the output

console.log([..."nanda"]); // ['n', 'a', 'n', 'd', 'a']

// when we try to use speard operator inside the string with array it spread each character of given string in the array

// Question 6 - what is the output - testing knowledge on spread operator

const admin = { admin: true, ...user2 };

console.log(admin);

// Question 7 - what is the output

const settings = {
  username: "peter",
  level: 19,
  health: 90,
};

const data = JSON.stringify(settings, ["level", "health"]); // this will only stringify the level and health from settings object

console.log(data); // {"level":19,"health":90}

// Question 8 - what is the output

const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  },
  perimeter: () => 2 * Math.PI * this.radius,
};

console.log(shape.diameter()); // 20
console.log(shape.perimeter()); // NaN - because for arrow functions this points to global window not this object

// Question 9 - what is object destructuring

const { age } = user2; // extracting a specific value from the object

// const {name} = user2 // we cannot destructure name because we have already name variable declared in global scope

const { name: myName } = user2; // so to avoid error we can access like this by renaming the property key

console.log(age);
console.log(myName);

const obj2 = {
  details: {
    username: "chris evans",
    age: 27,
  },
};

const {
  details: { username },
} = obj2; // nested obj destructuring

console.log(username);

// Question 10 - what is issue here - rest parameter should be always at last in the parametes "Uncaught SyntaxError: Rest parameter must be last formal parameter (at index.js:163:33)"

// function sample (fruits, ...args, favFruits){
//   return [...fruits, ...args, favFruits]
// }

// fixed code

function sample(fruits, favFruits, ...args) {
  return [...fruits, ...args, favFruits]; // speard operator we can use wherever we want no issues
}

console.log(sample(["apple", "banana"], "grapes", "orange"));

// Question 11 - what is the output - object referencing

let greetOne = { greeting: "hey" };

let greetTwo = greetOne; // This does NOT copy the object, it copies the reference (memory address).

greetOne.greeting = "Hello";

console.log(greetTwo);

// Question 12 - what is the output
// This condition will always return 'false' since JavaScript compares objects by reference, not value.ts(2839)
console.log({ a: 1 } == { a: 1 }); // false
console.log({ a: 1 } === { a: 1 }); // false
