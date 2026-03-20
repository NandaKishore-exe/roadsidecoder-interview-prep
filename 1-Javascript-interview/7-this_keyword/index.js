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

user.getDetails(); // output - nanda, so here when have a object before function call this will point to the object (user) where the function is called. This is called 'Implicit Binding' - this refers to the object before the dot at call time.

let user2 = {
  name: "kishore",
  childObj: {
    newName: "Peter",
    getData() {
      console.log(this.newName, "and", this.name);
    },
  },
};

user2.childObj.getData(); // output - Peter and undefined, why because here this points to childObj object and checks for name variable inside that object since there no such variable it prints undefined and newName has "peter" inside that object so this will print.

let user3 = {
  name: "nanda kishore",
  age: 28,
  getDetails2() {
    const nestedArrow = () => console.log(this.name); // Arrow functions capture this from where they are defined, not how they are called
    nestedArrow();
  },
};

user3.getDetails2(); // output - nanda kishore, Arrow function does NOT have its own this So it inherits this from its parent function (getDetails)

// How this behaves in classes

class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(this.name + " makes sound");
  }
}

const dog = new Animal("Tommy");
dog.speak();

console.log(dog);
