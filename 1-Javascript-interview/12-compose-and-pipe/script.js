// Compose and pipe

const addFive = (num) => {
  return num + 5;
};

const subTwo = (num) => {
  return num - 2;
};

const mulFour = (num) => {
  return num * 4;
};

const compose = (a, b, c) => (initialVal) => a(b(c(initialVal))); // compose applies functions from right to left.

const evaluate = compose(addFive, subTwo, mulFour);

console.log(evaluate(5));

const pipe = (a, b, c) => (initialVal) => c(b(a(initialVal))); // pipe applies functions from left to right.

const result = pipe(addFive, subTwo, mulFour);

console.log(result(5));

// To handle n number of functions parameters use reduce method

const compose2 =
  (...fns) =>
  (val) =>
    fns.reduceRight((acc, fn) => fn(acc), val);

const pipe2 =
  (...fns) =>
  (val) =>
    fns.reduce((acc, fn) => fn(acc), val);
