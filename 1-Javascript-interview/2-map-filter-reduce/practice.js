// Map, filter, Reduce - O/P Based Questions

// Question 1:
// You have this array:
// const nums = [2, 4, 6, 8];

// 👉 Use map to return a new array where each number is multiplied by 3
// 👉 Expected output: [6, 12, 18, 24]

// Write your solution below 👇

// console.log(nums.map((num) => num * 3));

// Question 2:
// You have this array:
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 👉 Use filter to return only numbers greater than 5
// 👉 Expected output: [6,7,8,9,10]

// const result = numbers.filter((num) => num > 5);
// console.log(result);

// Question 3:
// You have this array:
const nums = [5, 10, 15, 20];

// 👉 Use reduce to find the total sum
// 👉 Expected output: 50

// Write your solution below 👇

// const result = nums.reduce((acc, curr) => {
//   return acc + curr;
// }, 0);

// console.log(result);

// Question 4:
// You have this array of users:
// const users = [
//   { name: "Nanda", age: 24 },
//   { name: "Ram", age: 30 },
//   { name: "John", age: 28 },
// ];

// 👉 Use map to return a new array that contains only the names
// 👉 Expected output: ["Nanda", "Ram", "John"]

// Write your solution below 👇

// const names = users.map((user) => user.name);
// console.log("names:", names);

// Question 5:
// You have this product list:
const products = [
  { name: "Shirt", price: 500 },
  { name: "Shoes", price: 2000 },
  { name: "Cap", price: 300 },
  { name: "Jacket", price: 2500 },
];

// 👉 Use filter to return only products with price greater than 1000
// 👉 Expected output:
// [
//   { name: "Shoes", price: 2000 },
//   { name: "Jacket", price: 2500 }
// ]

// Write your solution below 👇

// const filteredProducts = products.filter((product) => product.price > 1000);
// console.log(filteredProducts);

// Question 6:
// You have this shopping cart:
const cart = [
  { item: "Shirt", price: 500, qty: 2 },
  { item: "Shoes", price: 2000, qty: 1 },
  { item: "Cap", price: 300, qty: 3 },
];

// 👉 Use reduce to calculate the total cart value
// 👉 Formula: price * qty
// 👉 Expected output: 500*2 + 2000*1 + 300*3 = 3900

// Write your solution below 👇

// const cartPrice = cart.reduce((total, item) => {
//   return total + item.price * item.qty;
// }, 0);

// console.log(cartPrice);

// Question 7:
// You have this users list:
const users = [
  { name: "Nanda", age: 24 },
  { name: "Ram", age: 17 },
  { name: "John", age: 30 },
  { name: "Priya", age: 15 },
];

// 👉 Return names of only users who are 18 or older
// 👉 Expected output: ["Nanda", "John"]

// Write your solution below 👇

// const filterStudents = users
//   .filter((student) => student.age >= 18)
//   .map((student) => student.name);

// console.log(filterStudents);

// Question 8:
// You have this array:
const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

// 👉 Use reduce to count occurrences of each fruit
// 👉 Expected output:
// {
//   apple: 3,
//   banana: 2,
//   orange: 1
// }

// Write your solution below 👇

const output = fruits.reduce((acc, curr) => {
  if (acc[curr]) {
    acc[curr] = acc[curr] + 1;
    return acc;
  }

  if (!acc[curr]) {
    acc[curr] = 1;
    return acc;
  }
}, {});

console.log(output);
