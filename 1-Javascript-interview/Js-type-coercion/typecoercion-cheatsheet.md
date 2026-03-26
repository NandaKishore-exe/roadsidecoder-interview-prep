# JavaScript Type Coercion & `typeof` — Cheat Sheet

---

## 1. JavaScript's 7 Primitive Types + Objects

| Type      | Example                  | `typeof` result |
| --------- | ------------------------ | --------------- |
| Number    | `42`, `3.14`, `NaN`      | `"number"`      |
| String    | `"hello"`                | `"string"`      |
| Boolean   | `true`, `false`          | `"boolean"`     |
| Undefined | `undefined`              | `"undefined"`   |
| Null      | `null`                   | `"object"` ⚠️   |
| BigInt    | `9007199254740991n`      | `"bigint"`      |
| Symbol    | `Symbol("id")`           | `"symbol"`      |
| Object    | `{}`, `[]`, `new Date()` | `"object"`      |
| Function  | `function() {}`          | `"function"`    |

---

## 2. `typeof` — Know Every Result Cold

```js
typeof 42; // "number"
typeof "hello"; // "string"
typeof true; // "boolean"
typeof undefined; // "undefined"
typeof null; // "object"   ← famous JS bug, null is NOT an object
typeof {}; // "object"
typeof []; // "object"   ← arrays are objects!
typeof function () {}; // "function"
typeof NaN; // "number"   ← NaN is technically a number type
typeof Symbol(); // "symbol"
typeof 42n; // "bigint"
```

### How to Actually Check These

```js
// Check for null (typeof doesn't work)
value === null;

// Check for array (typeof doesn't work)
Array.isArray([]); // true
Array.isArray({}); // false

// Check for NaN
Number.isNaN(NaN); // true
Number.isNaN("hello"); // false ← safer than global isNaN()

// Check exact type of anything
Object.prototype.toString.call([]); // "[object Array]"
Object.prototype.toString.call(null); // "[object Null]"
Object.prototype.toString.call({}); // "[object Object]"
Object.prototype.toString.call(function () {}); // "[object Function]"
```

---

## 3. What is Type Coercion?

JavaScript **automatically converts** a value from one type to another when the operation requires it.

Two kinds:

- **Implicit** — JS does it silently (`"5" + 1`)
- **Explicit** — You do it manually (`Number("5")`)

---

## 4. Explicit Conversion (You Control It)

```js
// → Number
Number("42"); // 42
Number(""); // 0
Number(" "); // 0
Number("abc"); // NaN
Number(true); // 1
Number(false); // 0
Number(null); // 0
Number(undefined); // NaN
Number([]); // 0
Number([3]); // 3
Number([1, 2]); // NaN

// → String
String(42); // "42"
String(true); // "true"
String(null); // "null"
String(undefined); // "undefined"
String([1, 2, 3]); // "1,2,3"
String({}); // "[object Object]"

// → Boolean
Boolean(0); // false
Boolean(""); // false
Boolean(null); // false
Boolean(undefined); // false
Boolean(NaN); // false
Boolean(false); // false
// Everything else → true
Boolean(1); // true
Boolean("hello"); // true
Boolean([]); // true  ← empty array is truthy!
Boolean({}); // true  ← empty object is truthy!
```

---

## 5. Falsy vs Truthy

Only **6 falsy values** exist in JS. Everything else is truthy.

| Falsy               | Truthy                             |
| ------------------- | ---------------------------------- |
| `0`                 | `1`, `-1`, any non-zero number     |
| `""` (empty string) | `"0"`, `" "`, any non-empty string |
| `null`              | `[]` (empty array)                 |
| `undefined`         | `{}` (empty object)                |
| `NaN`               | `function(){}`                     |
| `false`             | `true`                             |

```js
// Surprises
Boolean("0"); // true  ← non-empty string
Boolean("false"); // true  ← still a string
Boolean([]); // true  ← empty array is truthy
Boolean({}); // true  ← empty object is truthy
```

---

## 6. The `+` Operator — Addition vs Concatenation

`+` is the trickiest operator. Rule: **if either side is a string, it concatenates**.

```js
1 + 2           // 3      (number + number = addition)
"1" + 2         // "12"   (string + number = concatenation)
1 + "2"         // "12"   (number + string = concatenation)
"1" + "2"       // "12"   (string + string = concatenation)

1 + 2 + "3"     // "33"  ← left to right: (1+2) = 3, then 3+"3" = "33"
"1" + 2 + 3     // "123" ← left to right: "1"+2 = "12", then "12"+3 = "123"

true + 1        // 2     (true → 1)
false + 1       // 1     (false → 0)
null + 1        // 1     (null → 0)
undefined + 1   // NaN   (undefined → NaN)

[] + []         // ""    ([] → "", "" + "" = "")
[] + {}         // "[object Object]"
{} + []         // 0 ← in statement context, {} is a block, not object!
```

---

## 7. `-`, `*`, `/` Operators — Always Numeric

These operators **always try to convert to number**. No string concatenation.

```js
"5" - 2         // 3     ("5" → 5)
"5" * "2"       // 10    (both → numbers)
"10" / "2"      // 5
"5" - "3"       // 2
"5" * null      // 0     (null → 0)
"5" - undefined // NaN   (undefined → NaN)
"abc" - 1       // NaN   ("abc" → NaN)
true + true     // 2
[] - 1          // -1    ([] → 0)
```

---

## 8. `==` (Loose Equality) — Coercion Happens

`==` converts types before comparing. This is where most bugs come from.

### The Rules JS Follows

```js
// null and undefined only equal each other
null == undefined   // true
null == 0           // false
null == false       // false
undefined == false  // false

// NaN equals nothing, not even itself
NaN == NaN          // false  ← always false
NaN === NaN         // false

// Boolean converts to number first
true == 1           // true   (true → 1)
false == 0          // true   (false → 0)
true == "1"         // true   (true→1, "1"→1)
false == ""         // true   (false→0, ""→0)
false == "0"        // false  (false→0, "0"→0... wait)

// String vs Number → string converts to number
"5" == 5            // true   ("5" → 5)
"0" == false        // true   ("0"→0, false→0)
"" == false         // true   (""→0, false→0)
"" == 0             // true   (""→0)

// Object vs primitive → object converts via valueOf/toString
[] == false         // true   ([]→""→0, false→0)
[] == 0             // true   ([]→""→0)
[] == ""            // true   ([]→"")
[1] == 1            // true   ([1]→"1"→1)
[[]] == false       // true
```

> **Rule:** Just use `===` always. `==` is a trap factory.

---

## 9. `===` (Strict Equality) — No Coercion

Same type AND same value. No conversion.

```js
"5" === 5; // false — different types
null === null; // true
null === undefined; // false
NaN === NaN; // false — NaN is never equal to anything
```

---

## 10. Object-to-Primitive Conversion

When an object is used in a primitive context, JS calls methods in this order:

1. `[Symbol.toPrimitive]` (if defined)
2. `valueOf()`
3. `toString()`

```js
// Arrays convert to string via .join(",")
[1, 2, 3].toString()  // "1,2,3"
[].toString()         // ""
[1].toString()        // "1"

// Objects convert to "[object Object]"
({}).toString()       // "[object Object]"

// So in operations:
[1, 2] + [3, 4]       // "1,23,4"  (both → string)
{} + []               // 0 (in statement) or "[object Object]" (in expression)
[] + {}               // "[object Object]"
```

---

## 11. Common Interview Output Questions

```js
// +true, +false, +null
+true + // 1
  false + // 0
  null + // 0
  undefined + // NaN
  [] + // 0
  {} + // NaN
  "3"; // 3

// Chained comparisons
0 == false; // true
0 === false; // false
"" == false; // true
"" === false; // false
null == false; // false  ← null only == undefined
null == undefined; // true

// Type surprises
typeof NaN; // "number"
typeof null; // "object"
typeof []; // "object"
typeof class {}; // "function"

// parseInt vs Number
parseInt("12abc"); // 12  ← stops at non-numeric
Number("12abc"); // NaN ← strict, whole string must be numeric
parseInt("0x10"); // 16  ← reads hex
Number(true); // 1
parseInt(true); // NaN ← true → "true", can't parse
```

---

## 12. Quick Mental Model — What Does JS Convert To?

When JS needs a **number**:

```
true → 1 | false → 0 | null → 0 | undefined → NaN
"" → 0 | "3" → 3 | "abc" → NaN | [] → 0 | [3] → 3 | {} → NaN
```

When JS needs a **string**:

```
42 → "42" | true → "true" | false → "false"
null → "null" | undefined → "undefined"
[] → "" | [1,2] → "1,2" | {} → "[object Object]"
```

When JS needs a **boolean** (6 falsy values, rest truthy):

```
0, "", null, undefined, NaN, false → false
Everything else (including [], {}) → true
```

---

## Golden Rules

1. `typeof null === "object"` — a JS bug, use `=== null` to check for null
2. `typeof []` is `"object"` — use `Array.isArray()` to check for arrays
3. `+` concatenates if **either** side is a string — all other operators force numbers
4. `==` coerces — `null` only equals `undefined`, nothing else; use `===` always
5. `NaN !== NaN` — use `Number.isNaN()` to check for NaN
6. Empty `[]` and `{}` are **truthy** — they're objects, not empty values
7. `[]` converts to `""` (string) and `0` (number) — source of many `==` traps
8. For reliable type checking of anything: `Object.prototype.toString.call(value)`
