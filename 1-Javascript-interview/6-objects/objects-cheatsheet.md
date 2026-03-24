# JavaScript Objects — Cheat Sheet

---

## 1. Basics

```js
const user = { name: "nanda", age: 28, location: "chennai" };

user.name; // dot notation
user["name"]; // bracket notation

delete user.age; // delete a property
```

### Computed Property Keys

```js
const property = "studentName";
const name = "Nanda";

const student = {
  [property]: name, // key becomes "studentName"
};
// { studentName: "Nanda" }
```

### Iterating

```js
for (let key in user) {
  console.log(user[key]);
}
```

---

## 2. Duplicate Keys

```js
const obj = { a: "one", b: "two", a: "three" };
console.log(obj); // { a: "three", b: "two" }
```

> **Rule:** Duplicate keys are allowed — the **last one wins**

---

## 3. Object as a Key — Trap

```js
const a = {};
const b = { key: "b" };
const c = { key: "c" };

a[b] = 453;
a[c] = 123;

console.log(a); // { "[object Object]": 123 }
```

> **Rule:** Object keys must be strings or Symbols. Any object used as a key is converted to `"[object Object]"` — so `b` and `c` become the **same key**, and `123` overwrites `453`

---

## 4. `JSON.stringify` and `JSON.parse`

```js
const user = { name: "nanda", age: 27 };

const str = JSON.stringify(user); // '{"name":"nanda","age":27}'  (object → string)
JSON.parse(str); // { name: "nanda", age: 27 }  (string → object)
```

### Selective Stringify

```js
const settings = { username: "peter", level: 19, health: 90 };

JSON.stringify(settings, ["level", "health"]); // '{"level":19,"health":90}'
```

Pass an array of keys as the second argument to pick only those properties.

---

## 5. Spread Operator on Objects & Strings

```js
// Merge objects
const admin = { admin: true, ...user }; // { admin: true, name: "nanda", age: 27 }

// Spread string into array
[..."nanda"]; // ['n', 'a', 'n', 'd', 'a']
```

---

## 6. `this` in Methods — Arrow vs Regular

```js
const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2; // ✅ this = shape
  },
  perimeter: () => 2 * Math.PI * this.radius, // ❌ this = global (window)
};

shape.diameter(); // 20
shape.perimeter(); // NaN
```

> **Rule:** Never use arrow functions as object methods when you need `this`

---

## 7. Destructuring

### Basic

```js
const { age } = user;
```

### Rename to avoid conflicts

```js
const { name: myName } = user; // renames `name` → `myName`
```

### Nested

```js
const obj = { details: { username: "chris evans", age: 27 } };

const {
  details: { username },
} = obj;
console.log(username); // "chris evans"
```

---

## 8. Object Reference vs Value

### Reference copying

```js
let greetOne = { greeting: "hey" };
let greetTwo = greetOne; // same reference, NOT a copy

greetOne.greeting = "Hello";
console.log(greetTwo); // { greeting: "Hello" } — affected!
```

### Comparison is by reference

```js
{ a: 1 } == { a: 1 }  // false — different objects in memory
{ a: 1 } === { a: 1 } // false
```

### Null removes a reference, not the object

```js
let person = { name: "nanda" };
const members = [person];

person = null; // removes `person` reference, not the object

console.log(members); // [{ name: "nanda" }] — object still lives in array
```

---

## 9. Mutation Through Function — Classic Trap

```js
function changeAgeAndReference(person) {
  person.age = 25; // mutates the original object ✅

  person = { name: "John", age: 50 }; // person now points to a NEW object
  return person;
}

const personObj1 = { name: "Alex", age: 30 };
const personObj2 = changeAgeAndReference(personObj1);

console.log(personObj1); // { name: "Alex", age: 25 }  ← age mutated
console.log(personObj2); // { name: "John", age: 50 }  ← new object
```

**Why?** `person = {...}` inside the function reassigns the **local** variable — it does not affect `personObj1`. But `person.age = 25` mutated the **shared object** before the reassignment.

---

## 10. Default Parameter + Spread Trap

```js
const value = { number: 10 };

const mul = (x = { ...value }) => {
  console.log((x.number *= 2));
};

mul(); // 20 — uses fresh spread copy each time
mul(); // 20 — another fresh copy
mul(value); // 20 — mutates original: value.number = 20
mul(value); // 40 — mutates again: value.number = 40
```

> **Rule:** Default spread `{ ...value }` creates a **new object each call** — no mutation. Passing `value` directly mutates the original.

---

## 11. Shallow Copy vs Deep Copy

### Shallow Copy — top level only

```js
const original = { name: "Nanda", address: { city: "Delhi" } };

const shallow = { ...original }; // or Object.assign({}, original)

shallow.name = "Alex"; // ✅ doesn't affect original
shallow.address.city = "Mumbai"; // ❗ affects original — nested is shared!

console.log(original.address.city); // "Mumbai"
```

### Deep Copy — fully independent

```js
const deep = structuredClone(original); // ✅ modern, recommended
// OR
const deep = JSON.parse(JSON.stringify(original)); // works for simple objects

deep.address.city = "Mumbai"; // original untouched ✅
```

| Method                       | Top Level | Nested                              |
| ---------------------------- | --------- | ----------------------------------- |
| `{ ...obj }`                 | Copied    | Shared (reference)                  |
| `Object.assign`              | Copied    | Shared (reference)                  |
| `structuredClone`            | Copied    | Copied                              |
| `JSON.parse(JSON.stringify)` | Copied    | Copied (but loses functions, dates) |

---

## Golden Rules

1. Duplicate object keys are allowed — **last value wins**
2. Objects used as keys are coerced to `"[object Object]"` — avoid it
3. `=` on objects copies the **reference**, not the value
4. Objects are **equal only if they point to the same reference** — `{} !== {}`
5. Setting a variable to `null` removes that reference — other references to the same object still work
6. Arrow functions as object methods break `this` — use regular methods
7. Spread `{ ...obj }` is a **shallow copy** — nested objects are still shared
8. Use `structuredClone()` for safe deep copies
