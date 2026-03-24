# JavaScript Functions — Cheat Sheet

---

## 1. Function Declaration vs Function Expression

### Declaration

```js
function square(num) {
  return num * num;
}
```

### Expression

```js
const greet = function (name) {
  return `hello ${name}`;
};
```

|                            | Declaration | Expression                     |
| -------------------------- | ----------- | ------------------------------ |
| Hoisted                    | ✅ Fully    | ❌ Variable only (`undefined`) |
| Has name                   | ✅ Yes      | Optional                       |
| Can call before definition | ✅ Yes      | ❌ No                          |

---

## 2. First-Class Functions

Functions in JS can be:

- Assigned to variables
- Passed as arguments
- Returned from other functions

```js
function displaySquare(fn) {
  return `The square is ${fn(10)}`; // function passed as argument
}

displaySquare(square); // "The square is 100"
```

---

## 3. IIFE (Immediately Invoked Function Expression)

A function that **defines and runs itself immediately**.

```js
(function (name) {
  return `I'm ${name}`;
})("nanda"); // "I'm nanda"
```

**Nested IIFE — classic interview question:**

```js
(function (x) {
  return (function (y) {
    console.log(x); // 1 — inner function closes over outer x
  })(2);
})(1);
```

> **Use case:** Avoid polluting global scope. Variables inside are private.

---

## 4. Function Scope

```js
function greet() {
  let message = "Hello";
  console.log(message); // ✅
}
console.log(message); // ❌ ReferenceError
```

- Variables declared inside a function are **not accessible outside**
- Variables declared outside **are accessible inside**
- `var`, `let`, `const` — all three are **function-scoped** inside a function

### Local Variable Shadows Global

```js
let count = 10;

function showCount() {
  let count = 5; // shadows outer count
  console.log(count); // 5
}

showCount();
console.log(count); // 10
```

---

## 5. `var` in `for` Loop — Classic Interview Trap

```js
for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), i * 1000);
}
// prints: 5 5 5 5 5
```

**Why?**

- `var` is function-scoped → only **one shared `i`** for all iterations
- `setTimeout` is async → by the time callbacks run, loop is done and `i = 5`

**Fix — use `let`:**

```js
for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), i * 1000);
}
// prints: 0 1 2 3 4
```

`let` is block-scoped → each iteration gets its **own separate `i`**

---

## 6. Function Hoisting

```js
square(5); // ✅ Works — declaration is fully hoisted

function square(num) {
  return num * num;
}
```

**Expression hoisting trap:**

```js
var x = 21;

var fun = function () {
  console.log(x); // undefined — NOT 21
  var x = 20;
};

fun();
```

**Why `undefined` and not `21`?**

- A new function execution context is created
- `var x` inside is hoisted to the top of `fun` as `undefined`
- The inner `x` shadows the outer `x = 21` before it's assigned

---

## 7. Parameters vs Arguments

```js
function square(num) {
  // num → parameter (what the function receives)
  console.log(num * num);
}

square(5); // 5 → argument (what you pass in)
```

---

## 8. Spread vs Rest Operator

Both use `...` — context determines which one it is.

### Spread — expands an array into individual values

```js
function mul(num1, num2) {
  console.log(num1 * num2);
}

const arr = [4, 6];
mul(...arr); // same as mul(4, 6) → 24
```

### Rest — collects multiple arguments into an array

```js
function add(...nums) {
  console.log(nums[0] + nums[1]);
}

add(10, 10); // 20
```

> **Rule:** Rest parameter must always be the **last parameter**

```js
const fn = (a, ...nums, x) => {}; // ❌ SyntaxError
const fn = (a, x, ...nums) => {}; // ✅
```

---

## 9. Callback Functions

A function **passed as an argument** to another function, called after some operation.

```js
function greet(name) {
  console.log("Hello " + name);
}

function processUser(callback) {
  const name = "Rahul";
  callback(name);
}

processUser(greet); // "Hello Rahul"
```

**Common built-in callbacks:** `map`, `filter`, `reduce`, `setTimeout`, `addEventListener`

---

## 10. Arrow Functions

Shorter syntax — but with key differences from regular functions.

```js
const square = (num) => num * num;
```

### Differences from Regular Functions

| Feature            | Regular Function     | Arrow Function             |
| ------------------ | -------------------- | -------------------------- |
| `this`             | Own `this` (dynamic) | Inherits from parent scope |
| `arguments` object | ✅ Available         | ❌ Not available           |
| Can be constructor | ✅ Yes               | ❌ No                      |
| `prototype`        | ✅ Yes               | ❌ No                      |

### `this` difference in objects

```js
const obj = {
  name: "Rahul",
  normal: function () {
    console.log(this.name); // "Rahul" — this = obj
  },
  arrow: () => {
    console.log(this.name); // undefined — this = global/window
  },
};
```

### `arguments` difference

```js
const arrowFn = () => console.log(arguments); // ❌ ReferenceError

function normalFn() {
  console.log(arguments); // ✅ [1, 2, 3]
}

normalFn(1, 2, 3);
```

---

## Golden Rules

1. Use **declarations** when you need hoisting; use **expressions** for callbacks and passing around
2. Arrow functions **never** have their own `this` — avoid them as object methods
3. `var` in loops shares one variable — use `let` to get a fresh binding per iteration
4. **Rest** collects → must be last. **Spread** expands → can go anywhere
5. Function hoisting is **full** (declaration) vs **partial** (expression — only the variable is hoisted)
