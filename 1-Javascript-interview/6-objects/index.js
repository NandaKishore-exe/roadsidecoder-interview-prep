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

// Question 4 -
