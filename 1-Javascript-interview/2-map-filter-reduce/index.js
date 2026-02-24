// map, filter, reduce

// const nums = [1, 2, 3, 4];

// const multiplyThree = nums.map((num, i, arr) => {
//   return num * 3;
// });

// console.log(multiplyThree);

// const moreThanTwo = nums.filter((num) => {
//   return num > 2;
// });

// console.log(moreThanTwo);

// const sum = nums.reduce((acc, curr) => {
//   return acc + curr;
// }, 1);

// console.log(sum);

// polyfills

//polyfill for map method

Array.prototype.myMap = function (callback) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    const newValue = callback(this[i]);
    temp.push(newValue);
  }
  return temp;
};

//polyfill for filter method

Array.prototype.myFilter = function (callback) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      temp.push(this[i]);
    }
  }
  return temp;
};

// console.log(arr.myFilter((num) => num > 10));

//polyfill for reduce method

// arr.reduce((acc, curr, i, arr) => {}, initialValue)

Array.prototype.myReduce = function (callback, initialValue) {
  var acc = initialValue;

  for (let i = 0; i < this.length; i++) {
    acc = acc ? callback(acc, this[i], i, this) : this[i];
  }

  return acc;
};

let arr = [1, 2, 3, 4];

const sum = arr.myReduce((acc, curr, i, arr) => {
  return acc + curr;
}, 0);

console.log(sum);
