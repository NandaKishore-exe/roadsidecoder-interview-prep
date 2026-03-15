// Objects in javascript

const user = {
  name: "nanda",
  age: 28,
  location: "chennai",
};

// accessing the property values
// console.log(user.name);
// console.log(user["name"]);

// deleting the object values
// delete user.age;

// console.log(user);

const property = "studentName";
const name = "Nanda";

const studentData = {
  [property]: name, // add square braces to set the property
};

// console.log(studentData);

// iterating through object

for (key in user) {
  console.log(user[key]);
}

// Question 1
