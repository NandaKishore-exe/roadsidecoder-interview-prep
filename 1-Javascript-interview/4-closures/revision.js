// Need revision

let count = 0;

(function printCount() {
  if (count === 0) {
    let count = 1;
    console.log(count);
  }

  console.log(count);
})();

// output : 1 0
