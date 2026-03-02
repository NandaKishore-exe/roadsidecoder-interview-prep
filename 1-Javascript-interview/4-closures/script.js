// Closures in Javascript - A closure is created when a function remembers variables from its outer scope even after the outer function is finished executing.
//Function + remembered variables = Closure

// Lexical Scope - Lexical scope means the scope of variables is determined by the physical placement of the function in the code.

// Example

// global scope
var e = 10; // Global variable

function sum(a) {
  // inner scope - 1
  return function (b) {
    // inner scope - 2
    return function (c) {
      // inner scope - 3
      return function (d) {
        // inner scope - 4
        return a + b + c + d + e;
      };
    };
  };
}

console.log(sum(1)(2)(3)(4)); // 20

/*
🧠 What is Lexical Scope Here?

Lexical scope means:

👉 Each inner function can access variables of its outer function
👉 Because it is physically written inside it

Example:

Function (d) is written inside (c)
(c) inside (b)
(b) inside sum

So it can access all outer variables.

That is lexical scope.

🔥 Where is Closure Here?

Closure is happening at EVERY RETURN.

Each returned function remembers its outer variables.

Example:

When (b) function is returned, it remembers:

a

When (c) function is returned, it remembers:

a and b

When (d) function is returned, it remembers:

a, b, c

Even after outer functions finish execution.

🎯 Most Important Interview Understanding

👉 JavaScript does NOT cop 
*/
