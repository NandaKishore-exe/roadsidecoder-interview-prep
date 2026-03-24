# JavaScript Closures — Cheat Sheet

---

## 1. What is a Closure?

A closure is created when a function **remembers variables from its outer scope** even after the outer function has finished executing.

```js
function outer() {
  let a = 10;
  return function inner() {
    console.log(a); // remembers `a` even after outer() is done
  };
}

const fn = outer();
fn(); // 10
```

> **Formula:** Function + remembered outer variables = Closure

---

## 2. Lexical Scope

Variables are accessible based on **where the function is physically written** in the code — not where it is called from.

```js
var e = 10;

function sum(a) {
  return function (b) {
    return function (c) {
      return function (d) {
        return a + b + c + d + e; // accesses all outer variables
      };
    };
  };
}

console.log(sum(1)(2)(3)(4)); // 20
```

Each inner function can access variables of every outer function because it is **written inside** them. JS does not copy these variables — it holds a **live reference** to them.

---

## 3. Scope vs Closure

|            | Scope                         | Closure                              |
| ---------- | ----------------------------- | ------------------------------------ |
| What it is | Rules for variable visibility | Function remembering outer variables |
| When       | Determined at write time      | Active after outer function finishes |
| Purpose    | Controls access               | Persists state                       |

---

## 4. Output Questions

### Variable Shadowing in IIFE

```js
let count = 0;

(function printCount() {
  if (count === 0) {
    let count = 1; // new block-scoped variable — shadows outer
    console.log(count); // 1
  }
  console.log(count); // 0 — outer count, untouched
})();
```

### `var` + `setTimeout` Trap

```js
function a() {
  for (var i = 0; i < 3; i++) {
    setTimeout(function log() {
      console.log(i);
    }, 1000);
  }
}

a(); // 3 3 3
```

**Why?** `var` is function-scoped — one shared `i`. By the time `setTimeout` fires, the loop is done and `i = 3`.

**Fix 1 — use `let`:**

```js
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000); // 0 1 2
}
```

**Fix 2 — wrap in a function (preserves `var`):**

```js
for (var i = 0; i < 3; i++) {
  function inner(i) {
    setTimeout(() => console.log(i), 1000);
  }
  inner(i); // each call gets its own copy of i
}
// 0 1 2
```

---

## 5. Closure Patterns

### Currying / Base Adder

```js
function createBase(a) {
  return function (b) {
    return b + a; // closes over `a`
  };
}

const addSix = createBase(6);
addSix(10); // 16
addSix(21); // 27
```

### Time Optimization — Compute Once, Reuse

```js
function find() {
  let a = [];
  for (let i = 0; i < 1000000; i++) {
    a[i] = i * i; // heavy work done once
  }
  return function (index) {
    console.log(a[index]); // subsequent calls are instant
  };
}

const closure = find(); // heavy computation happens here
closure(6); // fast — just lookup
closure(50); // fast — just lookup
```

### Private Counter

```js
function counter() {
  var _counter = 0; // private — not accessible outside

  return {
    add(increment) {
      _counter += increment;
    },
    retrieve() {
      return "counter = " + _counter;
    },
  };
}

const c = counter();
c.add(5);
c.add(10);
console.log(c.retrieve()); // "counter = 15"
```

`_counter` is never exposed directly — only controlled through `add` and `retrieve`.

### Run Only Once

```js
function likeTheVideo() {
  let called = 0;
  return function () {
    if (called > 0) {
      console.log("Already subscribed");
    } else {
      console.log("subscribed!");
      called++;
    }
  };
}

const isSubscribed = likeTheVideo();
isSubscribed(); // "subscribed!"
isSubscribed(); // "Already subscribed"
```

---

## 6. Module Pattern

Uses **IIFE + Closures** to create private state and expose a public API.

```js
var module = (function () {
  // private
  function privateMethod() {}
  let privateVar = 0;

  // public API
  return {
    publicMethod() {
      privateMethod();
    },
  };
})();
```

**Why use it?**

- Encapsulate private logic
- Avoid polluting global scope
- Expose only what's needed

---

## 7. `once` Polyfill

Run a function **exactly once**, return cached result on subsequent calls.

```js
function once(func, context) {
  let ran;
  return function () {
    if (func) {
      ran = func.apply(context || this, arguments);
      func = null; // nulled out — can never run again
    }
    return ran;
  };
}

const hello = once((a, b) => console.log("hello", a, b));
hello(1, 2); // "hello 1 2"
hello(1, 2); // nothing — func is null
```

---

## 8. Memoization Polyfill

Cache function results by arguments. Return cached result on repeat calls — skips recomputation.

```js
function myMemoize(fn, context) {
  const cache = {};

  return function (...args) {
    const key = JSON.stringify(args);

    if (!cache[key]) {
      cache[key] = fn.call(context || this, ...args);
    }

    return cache[key];
  };
}

const memoized = myMemoize(clumsyProduct);

memoized(9467, 7689); // slow — computes and caches
memoized(9467, 7689); // instant — returns from cache
```

**How it works:** `cache` persists via closure. Each unique set of arguments gets its own key (`JSON.stringify`).

---

## Golden Rules

1. **Closure = function + remembered outer scope** — outer function can be gone, variables live on
2. **Lexical scope** is set at write time — inner functions always see outer variables
3. JS holds a **live reference** to outer variables, not a copy — mutations are reflected
4. **`var` in loops** shares one variable across all iterations — use `let` or wrap in a function
5. **Module pattern** = IIFE + closure = private state + public API
6. **Memoize** = closure-powered cache keyed by `JSON.stringify(args)`
