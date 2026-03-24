# JavaScript Variables, Scope & Hoisting — Cheat Sheet

---

## 1. `var` vs `let` vs `const`

| Feature         | `var`            | `let`    | `const`  |
| --------------- | ---------------- | -------- | -------- |
| Scope           | Function         | Block    | Block    |
| Redeclare       | ✅ Yes           | ❌ No    | ❌ No    |
| Reassign        | ✅ Yes           | ✅ Yes   | ❌ No    |
| Hoisted         | ✅ (`undefined`) | ✅ (TDZ) | ✅ (TDZ) |
| Must initialize | ❌ No            | ❌ No    | ✅ Yes   |

---

## 2. Scope Types

### Block Scope (`let`, `const`)

```js
{
  let a = 10;
  const b = 20;
  console.log(a, b); // 10 20
}
console.log(a); // ❌ ReferenceError: a is not defined
```

### Function Scope (`var`)

```js
function x() {
  var d = 40;
  console.log(d); // 40
}
x();
console.log(d); // ❌ ReferenceError: d is not defined
```

### ⚠️ `var` in a Block (Not a Function)

```js
{
  var e = 50; // NOT block scoped — leaks to global
}
console.log(e); // 50 ✅ (global now)
```

> **Rule:** `var` inside a block (but not a function) becomes **global scope**

---

## 3. Variable Shadowing

When an inner scope declares a variable with the **same name** as an outer scope, the inner one **shadows** (hides) the outer — but the outer still exists.

```js
function test() {
  let a = "Hello";

  if (true) {
    let a = "Hi";
    console.log(a); // "Hi"  ← inner a
  }

  console.log(a); // "Hello" ← outer a (untouched)
}
```

---

## 4. Illegal Shadowing

Happens when `var` in an inner block tries to shadow a `let`/`const` from the outer scope — `var` ignores block scope and climbs to global, causing a redeclaration conflict.

```js
let x = 10;
{
  var x = 20; // ❌ SyntaxError: Identifier 'x' has already been declared
}
```

### Shadowing Rules

| Outer          | Inner                 | Allowed?   |
| -------------- | --------------------- | ---------- |
| `let`          | `let`                 | ✅         |
| `const`        | `const`               | ✅         |
| `let`          | `const`               | ✅         |
| `var` (global) | `var` inside function | ✅         |
| `let`          | `var` inside block    | ❌ Illegal |
| `const`        | `var` inside block    | ❌ Illegal |

> **Rule:** `var` in an inner **block** cannot shadow an outer `let` or `const`. Inside a **function** it's fine — because the function creates a new scope entirely.

---

## 5. Hoisting

JavaScript moves variable **declarations** to the top of their scope during the creation phase, before any code runs.

### `var` — Hoisted with `undefined`

```js
console.log(count); // undefined (no error)
var count = 1;
```

During creation phase, JS stores `count` in memory as `undefined`. The value `1` is assigned only when that line executes.

### `let` / `const` — Hoisted but in TDZ

```js
console.log(count); // ❌ ReferenceError
let count = 1;
```

`let` and `const` are hoisted but **not initialized** — they sit in the **Temporal Dead Zone** until their declaration line is reached.

---

## 6. Temporal Dead Zone (TDZ)

The TDZ is the period between when a `let`/`const` variable is **hoisted** (start of its scope) and when it is **initialized** (its declaration line).

```js
{
  // ← scope starts, x is hoisted (TDZ begins)
  console.log(x); // ❌ ReferenceError (still in TDZ)
  console.log(x); // ❌ ReferenceError (still in TDZ)
  let x = 10; // ← TDZ ends here, x is initialized
  console.log(x); // ✅ 10
}
```

> **Rule:** Accessing a `let`/`const` variable before its declaration line always throws a `ReferenceError`

---

## Golden Rules

1. Prefer `const` by default → use `let` only when reassignment is needed → avoid `var`
2. `var` leaks out of blocks but is trapped inside functions
3. Shadowing is fine — as long as `var` doesn't shadow `let`/`const` in a block
4. All variables are hoisted — but only `var` is initialized to `undefined`
5. `let`/`const` in TDZ = hoisted but untouchable until declaration line
