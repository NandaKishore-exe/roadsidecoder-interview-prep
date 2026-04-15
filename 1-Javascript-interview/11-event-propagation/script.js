// Event Propagation in Javascript

// Question 1 - what is Event Propagtion?
// Event propagation describes how events travel through the DOM tree when they’re triggered.

// Question 2 - what is Event Bubbling?
// Event bubbling is the phase where an event starts from the target element and “bubbles up” through its ancestor elements in the DOM hierarchy.

// Question 3 - event.target vs this.target vs even.currentTarget

// const div = document.querySelector("div");
// const form = document.querySelector("form");
// const button = document.querySelector("button");

// div.addEventListener("click", func);

// form.addEventListener("click", func);

// button.addEventListener("click", func);

// function func(event) {
//   alert(
//     "currentTarget = " +
//       event.currentTarget.tagName +
//       ", target = " +
//       event.target.tagName +
//       ", this =" +
//       this.tagName,
//   );
// }

// Question 4 - What is Event Capturing / Trickling?
// Event capturing is the opposite phase where the event starts from the top of the DOM tree and “trickles down” to the target element.

// div.addEventListener(
//   "click",
//   function (event) {
//     alert("div");
//   },
//   { capture: true },
// );

// form.addEventListener(
//   "click",
//   function (event) {
//     alert("form");
//   },
//   { capture: true },
// );

// button.addEventListener(
//   "click",
//   function (event) {
//     alert("button");
//   },
//   { capture: true },
// );

// Question 5 - How to stop bubbling or capturing?

// div.addEventListener("click", function (event) {
//   // event.stopPropagation();
//   alert("div");
// });

// form.addEventListener("click", function (event) {
//   event.stopPropagation();
//   alert("form");
// });

// button.addEventListener("click", function (event) {
//   // event.stopPropagation();
//   alert("button");
// });

// Question 6 - What is Event Delegation?
// Event delegation is a technique where you attach a single event listener to a parent element, instead of attaching individual listeners to each child element.

// document.querySelector(".products").addEventListener("click", (e) => {
//   if (e.target.tagName === "SPAN") {
//     window.location.href += "/" + e.target.location;
//   }
// });

// Question 7 - Create a modal which closes by clicking on negative space?

const container = document.querySelector(".modalContainer");
const button = document.querySelector(".modalButton");

button.addEventListener("click", () => {
  toggleModal(true);
});

function toggleModal(toggle) {
  container.style.display = toggle ? "flex" : "none";
}

container.addEventListener("click", (e) => {
  if (e.target.className === "modalContainer") {
    toggleModal(false);
  }
});
