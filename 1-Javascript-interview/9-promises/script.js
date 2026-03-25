// Promises in Javascript

console.log("start");

const sub = new Promise((resolve, reject) => {
  setTimeout(() => {
    const result = false;
    if (result) {
      resolve("You have been subscribed to our services");
    } else {
      reject(new Error("Sorry you haven't subscribed"));
    }
  }, 2000);
});

sub
  .then((res) => {
    console.log(res);
  })
  .catch((err) => console.error(err));

console.log("end");
