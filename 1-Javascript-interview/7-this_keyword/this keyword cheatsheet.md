# JavaScript `this` — Cheat Sheet

A quick reference for how `this` behaves across different contexts.

---

## Quick Reference

| Context                        | `this` value                  |
| ------------------------------ | ----------------------------- |
| Regular function (non-strict)  | `window` (global)             |
| Regular function (strict mode) | `undefined`                   |
| Object method                  | The object before the dot     |
| Arrow function                 | Inherited from parent scope   |
| `new` keyword                  | The newly created object      |
| `call` / `apply` / `bind`      | Whatever you pass in          |
| Callback / `setTimeout`        | Usually lost (becomes global) |

---

## 1. Global / Default Binding

```js
function test() {
  console.log(this);
}

test();
```

- **Browser (non-strict)** → `window`
- **Strict mode** → `undefined`

> **Rule:** A plain function call → `this` = global (or `undefined` in strict mode)

---

## 2. Implicit Binding (Object Method)

```js
const user = {
  name: "nanda",
  getName() {
    console.log(this.name); // "nanda"
  },
};

user.getName();
```

> **Rule:** The object before the dot becomes `this`

### ⚠️ Lost Context Trap

```js
const fn = user.getName;
fn(); // undefined — `this` is lost
```

> **Rule:** When a method is detached from its object, `this` is lost

---

## 3. Callbacks & `setTimeout`

```js
setTimeout(user.getName, 1000); // undefined
```

The function is passed as a reference and called without the object.

**Fix:**

```js
setTimeout(user.getName.bind(user), 1000); // bind
setTimeout(() => user.getName(), 1000); // arrow wrapper
```

---

## 4. Arrow Functions

```js
const user = {
  name: "nanda",
  getName: () => {
    console.log(this.name); // undefined
  },
};
```

> **Rule:** Arrow functions do **not** have their own `this`. They inherit it from the enclosing (parent) scope — not the object.

### Arrow Inside a Regular Method ✅

```js
const user = {
  name: "nanda",
  getName() {
    const fn = () => console.log(this.name); // "nanda"
    fn();
  },
};
```

> **Rule:** Arrow inside a regular function inherits `this` from that function

---

## 5. `new` Keyword (Classes & Constructors)

```js
class Person {
  constructor(name) {
    this.name = name;
  }
  getName() {
    console.log(this.name); // "nanda"
  }
}

const p = new Person("nanda");
p.getName();
```

> **Rule:** `new` → `this` = the newly created object

---

## 6. Explicit Binding (`call`, `apply`, `bind`)

```js
function sayName() {
  console.log(this.name);
}

const user = { name: "nanda" };

sayName.call(user); // "nanda" — call immediately
sayName.apply(user); // "nanda" — call immediately (args as array)

const bound = sayName.bind(user);
bound(); // "nanda" — call later
```

> **Rule:** You manually control what `this` is

---

## 7. Nested Object Trap

```js
const obj = {
  name: "nanda",
  child: {
    name: "kishore",
    getName() {
      console.log(this.name); // "kishore"
    },
  },
};

obj.child.getName();
```

> **Rule:** Only the **last object before the dot** matters

---

## 8. `setTimeout` with Regular Function (Common Bug)

```js
const obj = {
  name: "nanda",
  getName() {
    setTimeout(function () {
      console.log(this.name); // undefined ❌
    }, 1000);
  },
};
```

**Fix — use an arrow function:**

```js
setTimeout(() => {
  console.log(this.name); // "nanda" ✅
}, 1000);
```

---

## Golden Rules

1. **`this` depends on _how_ a function is called, not where it's defined**
2. Object before the dot → `this` = that object
3. Arrow function → inherits `this` from parent scope
4. Callback / detached method → `this` is usually lost
5. `new` → `this` = new object
6. `bind` / `call` / `apply` → you set `this` explicitly
