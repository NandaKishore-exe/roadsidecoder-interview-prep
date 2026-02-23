// map, filter, reduce

const nums = [1, 2, 3, 4];

const multiplyThree = nums.map((num, i, arr) => {
  return num * 3;
});

console.log(multiplyThree);

const moreThanTwo = nums.filter((num) => {
  return num > 2;
});

console.log(moreThanTwo);

const sum = nums.reduce((acc, curr) => {
  return acc + curr;
}, 1);

console.log(sum);

// polyfills

//polyfill for map method
