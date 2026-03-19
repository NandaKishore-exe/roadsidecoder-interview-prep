// 'this' keyword in javascript (Implicit Binding)
// Explain 'this' keyword?

// 👉 this is a reference to the object that is currently executing the function.

// But here’s the tricky part:

// this is NOT fixed — it depends on how the function is called, not where it is written.

this.a = 5; // global binding (window object)

// console.log(this.a); // Here this will point to global object(Browser) which is window

function getParams() {
  console.log(this.a);
}

getParams(); // output - 5 because (this.a) will point to global binding.

// Rule - "If there is no object before the function call → this goes to global (or undefined in strict mode)"

// Arrow function - Arrow functions don’t have their own this — they inherit it from their surrounding (lexical) scope.

const getValue = () => {
  console.log(this.a);
};

getValue(); // output - 5 because (this.a) will point to global binding.

let user = {
  name: "nanda",
  age: 28,
  getDetails() {
    console.log(this.name);
  },
};

console.log(user.getDetails());
