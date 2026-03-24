# JavaScript Currying — Cheat Sheet

---

## What is Currying?

Transforming a function that takes multiple arguments into a **sequence of functions each taking one argument**.

```js
// Normal
f(a, b);

// Curried
f(a)(b);
```

```js
function f(a) {
  return function (b) {
    console.log(a, b);
  };
}

f(5)(6); // 5 6
```

---

## 1. Basic Currying — `sum(2)(6)(1)`

```js
function sum(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

sum(2)(6)(1); // 9
```

Each call takes **one argument**, returns a function waiting for the next.

---

## 2. Evaluate Pattern — Reusable Operations

```js
function evaluate(opType) {
  return function (a) {
    return function (b) {
      if (opType === "sum") return a + b;
      if (opType === "subtract") return a - b;
      if (opType === "multiply") return a * b;
      if (opType === "divide") return a / b;
      return "Invalid Operation";
    };
  };
}

evaluate("sum")(4)(2); // 6
evaluate("multiply")(4)(2); // 8
evaluate("divide")(4)(2); // 2
evaluate("subtract")(4)(2); // 2
```

**Reuse by pre-filling the operation:**

```js
const multiply = evaluate("multiply");
multiply(4)(2); // 8
multiply(3)(5); // 15
```

---

## 3. Infinite Currying — `sum(1)(2)(3)...(n)()`

Call with no argument to terminate and get the result.

```js
function sum(a) {
  return function (b) {
    if (b) return sum(a + b); // accumulate and recurse
    return a; // no argument → return total
  };
}

sum(3)(3)(3)(); // 9
sum(1)(2)(3)(4)(); // 10
```

> **Trick:** Each call adds to the running total via recursion. An empty call `()` signals "done".

---

## 4. Currying vs Partial Application

Both pre-fill arguments — but differently.

|                    | Currying         | Partial Application    |
| ------------------ | ---------------- | ---------------------- |
| Arguments per call | Always **one**   | **Any number** at once |
| Calls needed       | One per argument | Fewer, flexible        |
| Form               | `f(a)(b)(c)`     | `f(a)(b, c)`           |

### Currying

```js
const add = (a) => (b) => (c) => a + b + c;

add(1)(2)(3); // 6 — one argument each time
```

### Partial Application

```js
function add(a, b, c) {
  return a + b + c;
}

const addOne = add.bind(null, 1); // pre-fill `a = 1`
addOne(2, 3); // 6 — pass remaining two at once
```

---

## 5. Real-World Use — DOM Updates

Pre-fill an element ID, reuse to update content later.

```js
function updateElementText(id) {
  return function (content) {
    document.querySelector("#" + id).textContent = content;
  };
}

const updateHeader = updateElementText("heading"); // pre-fill ID
updateHeader("Hello!"); // updates #heading
updateHeader("Goodbye!"); // reuses same element
```

> **Pattern:** Lock in the "what" early, supply the "value" later.

---

## 6. `curry()` — Universal Polyfill

Converts any `f(a, b, c)` into `f(a)(b)(c)` automatically.

```js
function curry(fn) {
  return function curriedFunc(...args) {
    if (args.length >= fn.length) {
      return fn(...args); // enough args — call original
    } else {
      return function (...next) {
        return curriedFunc(...args, ...next); // accumulate and retry
      };
    }
  };
}
```

**How it works:**

```js
const sum = (a, b, c) => a + b + c; // fn.length = 3

const total = curry(sum);

total(1)(2)(3); // 6  — one at a time
total(1, 2)(3); // 6  — two then one
total(1)(2, 3); // 6  — one then two
total(1, 2, 3); // 6  — all at once
```

`fn.length` = number of parameters the original function expects. Once collected args reach that count, the original function fires.

---

## Why Use Currying?

| Benefit               | Example                                                    |
| --------------------- | ---------------------------------------------------------- |
| **Reusability**       | Pre-fill `evaluate("multiply")` once, reuse many times     |
| **Avoid repetition**  | `updateHeader` vs repeating `updateElementText("heading")` |
| **Compose functions** | Build complex logic from small single-argument functions   |
| **Lazy evaluation**   | Collect args over time, execute only when ready            |

---

## Golden Rules

1. **Currying** = one argument per call, always — `f(a)(b)(c)`
2. **Partial application** = pre-fill some args, pass the rest in one go
3. **Infinite currying** = recurse while args come in, terminate on empty call `()`
4. **`curry()` polyfill** checks `args.length >= fn.length` — if enough, call; if not, wait for more
5. Use currying when you want to **reuse a function with some arguments fixed**
