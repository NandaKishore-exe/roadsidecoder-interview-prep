// Question 1 - What is the output?

const user = {
  firstName: "nanda",
  getName() {
    const firstName = "kishore";
    return this.firstName;
  },
};

console.log(user.getName()); // "nanda"
