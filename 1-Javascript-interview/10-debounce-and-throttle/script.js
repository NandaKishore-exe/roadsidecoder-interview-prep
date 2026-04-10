// Debouncing and Throttling in Javascript

// Ques 1 - Create a button UI and add debounce as follows =>

// --> Show "Button Pressed <X> Times" every time button is pressed
// --> Increase "Triggered <Y> Times" count after 800ms of debounce

const btn = document.querySelector(".increment-btn");
const btnPress = document.querySelector(".increment-pressed");
const count = document.querySelector(".increment-count");

var pressedCount = 0;
var triggerCount = 0;

// const debounceCount = _.debounce(() => {
//   count.innerHTML = ++triggerCount;
// }, 800);

// btn.addEventListener("click", () => {
//   btnPress.innerHTML = ++pressedCount;
//   debounceCount();
// });

// Ques 2 - Create a button UI and add throttle as follows =>

// --> Show "Button Pressed <X> Times" every time button is pressed
// --> Increase "Triggered <Y> Times" count after 800ms of throttle

// const throttledCount = _.throttle(() => {
//   count.innerHTML = ++triggerCount;
// }, 800);

// btn.addEventListener("click", () => {
//   btnPress.innerHTML = ++pressedCount;
//   throttledCount();
// });

// Ques - 3 create debounce() polyfill implementation

// const myDebounce = (callback, delay) => {
//   let timer;
//   return function (...args) {
//     if (timer) clearTimeout(timer);
//     timer = setTimeout(() => {
//       callback(...args);
//     }, delay);
//   };
// };

// const debounceCount = myDebounce(() => {
//   triggerCount += 1;
//   count.innerHTML = triggerCount;
// }, 800);

// btn.addEventListener("click", () => {
//   btnPress.innerHTML = ++pressedCount;
//   debounceCount();
// });

// Ques - 4 create throttle() polyfill implementation

const myThrottle = (callback, delay) => {
  let last = 0;
  return function (...args) {
    let now = new Date().getTime();
    if (now - last < delay) return;
    last = now;
    return callback(...args);
  };
};

const throttledCount = myThrottle(() => {
  triggerCount += 1;
  count.innerHTML = triggerCount;
}, 800);

btn.addEventListener("click", () => {
  btnPress.innerHTML = ++pressedCount;
  throttledCount();
});
