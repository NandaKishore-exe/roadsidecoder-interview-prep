🧠 JavaScript this – Complete Cheat Sheet
🔑 1. Global / Default Binding
function test() {
console.log(this);
}

test();
✅ Result

Browser (non-strict) → window

Strict mode → undefined

👉 Rule:

🔥 Normal function call → this = global (or undefined)

🔑 2. Implicit Binding (Object Method)
const user = {
name: "nanda",
getName() {
console.log(this.name);
},
};

user.getName();
✅ Output
nanda

👉 Rule:

🔥 Object before dot → becomes this

❗ Lost Context (Very Important)
const fn = user.getName;
fn();
❌ Output
undefined

👉 Rule:

🔥 Function detached → this lost

🔑 3. setTimeout / Callback Case
setTimeout(user.getName, 1000);
❌ Output
undefined

👉 Why?

Passed as function reference

Called without object

✅ Fix
setTimeout(user.getName.bind(user), 1000);
// OR
setTimeout(() => user.getName(), 1000);
🔑 4. Arrow Function (this)
const user = {
name: "nanda",
getName: () => {
console.log(this.name);
},
};

user.getName();
❌ Output
undefined

👉 Rule:

🔥 Arrow function takes this from parent scope (NOT object)

🔑 5. Arrow inside Normal Function (Important)
const user = {
name: "nanda",
getName() {
const fn = () => {
console.log(this.name);
};
fn();
},
};

user.getName();
✅ Output
nanda

👉 Rule:

🔥 Arrow inherits this from parent function

🔑 6. Constructor / Class (new keyword)
class Person {
constructor(name) {
this.name = name;
}

getName() {
console.log(this.name);
}
}

const p = new Person("nanda");
p.getName();
✅ Output
nanda

👉 Rule:

🔥 new → this = newly created object

🔑 7. Explicit Binding (call, apply, bind)
function sayName() {
console.log(this.name);
}

const user = { name: "nanda" };

sayName.call(user);
✅ Output
nanda

👉 Rule:

🔥 You manually control this

🔑 8. Nested Object Trap
const obj = {
name: "nanda",
child: {
name: "kishore",
getName() {
console.log(this.name);
},
},
};

obj.child.getName();
✅ Output
kishore

👉 Rule:

🔥 Only last object before dot matters

🔑 9. Method inside setTimeout (Real-world bug)
const obj = {
name: "nanda",
getName() {
setTimeout(function () {
console.log(this.name);
}, 1000);
},
};

obj.getName();
❌ Output
undefined
✅ Fix (Arrow)
setTimeout(() => {
console.log(this.name);
}, 1000);
🧠 FINAL GOLDEN RULES (🔥 MUST REMEMBER)

🔥 this depends on how function is called

🔥 Object before dot → this

🔥 Arrow → inherits this

🔥 Callback → this usually lost

🔥 new → this = new object

🔥 bind → fixes this
