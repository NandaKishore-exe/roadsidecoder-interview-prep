// 1- class and constructor

// class Teacher {
//   constructor(name, channel, likes = 0) {
//     this.name = name;
//     this.channel = channel;
//     this.videoLikes = likes;
//   }

//   intro() {
//     return `Hey, its ${this.name}! welcome to ${this.channel}`;
//   }

//   like() {
//     this.videoLikes++;
//     return `Liked this video! Current likes: ${this.videoLikes}`;
//   }
// }

// const roadsidecoder = new Teacher("Piyush", "RoadsideCoder");

// 2 - How will you create above example class using function constructors?
// function Teacher(name, channel, likes = 0) {
//   this.name = name;
//   this.channel = channel;
//   this.videoLikes = likes;
// }

// Teacher.prototype.intro = function () {
//   return `Hey, its ${this.name}! welcome to ${this.channel}`;
// };

// Teacher.prototype.like = function () {
//   this.videoLikes++;
//   return `Liked this video! Current likes: ${this.videoLikes}`;
// };

// const nkExe = new Teacher("nanda", "nkEXE");

// 3 - Inheritance

// class YoutubeTeacher extends Teacher {
//   constructor(name, channel, likes, subscribers) {
//     super(name, channel, likes);
//     this.subscribers = subscribers;
//   }

//   static paidCourse() {
//     // return `Frontend interview prep course from ${this.channel}`;
//     return new YoutubeTeacher("Piyush", "RoadsideCoder", 69, "90k");
//   }

//   subscribersCount() {
//     return `${this.channel} has ${this.subscribers} subscribers.`;
//   }
// }

// const ytTeacher = new YoutubeTeacher("Piyush", "RoadsideCoder", 69, "90k");

// ------ Interview Questions on class and constructors ------

// Question 1 - Explain the difference between a class and an object in javascript.

// A class is a blueprint that defines the structure and behavior of objects.
// Objects are instances of classes that possess properties and methods defined by the class.

// Question 2 - What's the output?

// class Rectangle {
//   constructor(width, height) {
//     this.width = width;
//     this.height = height;
//   }

//   area() {
//     return this.width * this.height;
//   }
// }

// const square = new Rectangle(5, 5);
// const rect = new Rectangle(4, 6);

// console.log(square.area()); // 25
// console.log(rect.area()); // 24

// Question 3 - Question 3 - How does inheritance work in JavaScript classes?

// Inheritance in JavaScript classes is achieved using the extends keyword.
// It allows a subclass (child class) to inherit properties and methods from a superclass (parent
// class).

// Question 4 - What's the output?

// class Employee {
//   constructor(){
//     this.name = "John";
//   }
//   constructor(){
//     this.age = 30;
//   }
// }

// var employeeObject = new Employee();

// console.log(employeeObject.name); // Uncaught SyntaxError: A class may only have one constructor

// JavaScript classes can only have one constructor, so having multiple constructor declarations in
// the Employee class causes a syntax error.

// Question 5 - Which approach is better and why?

// Approach 1

// const jamesbond = {
//   firstName: "jamesbond",
//   lastName: "007",
//   getFullName: function (){
//     return `${this.firstName} ${this.lastName}`.trim();
//   }
// }

// jamesbond.getFullName();

// or

// Approach 2
// class Person {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
// }

// Person.prototype.getFullName = function (){
//   eturn `${this.firstName} ${this.lastName}`.trim();
// }

// const jamesBond = new Person("JamesBond", "007");

// jamesBond.getFullName();

// The second approach is better because it registers the getFullName method in the prototype,
// making it more memory-efficient than the first approach, which creates a closure for each object
// containing the method.

// Question 6 - Implement this -

class Calculator {
  constructor() {
    this.result = 0;
  }
  add(num) {
    this.result = this.result + num;
    return this;
  }

  subtract(num) {
    this.result = this.result - num;
    return this;
  }

  multiply(num) {
    this.result = this.result * num;
    return this;
  }

  divide(num) {
    if (num != 0) {
      this.result = this.result / num;
    } else {
      console.log("Cannot divide by 0");
    }
    return this;
  }

  getResult() {
    return this.result;
  }
}

const calc = new Calculator();

const result = calc.add(10).subtract(5).multiply(2).divide(4).getResult();
// console.log(result);

// Question 7 - Inheritance and Polymorphism

// Implement a `Shape` class with an `area()` method.
// Create subclasses `Circle` and `Square` that inherit from `Shape` and override the
// `area()` method to calculate their respective areas.

class Shape {
  area() {
    return 0;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  area() {
    return this.radius ** 2;
  }
}

class Square extends Shape {
  constructor(side) {
    super();
    this.side = side;
  }

  area() {
    return this.side ** 2;
  }
}

const circle = new Circle(5);
const square = new Square(4);

console.log(circle.area());
console.log(square.area());

// Question 8 - What are Getters and Setters in JS?

// Getters and setters are methods used to control access to the properties of a class.

// They allow for more controlled modification and retrieval of property values, such as
// incrementing likes in a video or ensuring certain conditions are met before setting a property
// value.

class Teacher {
  constructor(name, channel, likes = 0) {
    this.name = name;
    this.channel = channel;
    this._videoLikes = likes;
  }

  intro() {
    return `Hey, its ${this.name}! welcome to ${this.channel}`;
  }

  like() {
    this._videoLikes++;
    return `Liked this video! Current likes: ${this._videoLikes}`;
  }

  get videoLikes() {
    return this.videoLikes;
  }

  set videoLikes(likes) {
    if (likes < 0) throw new Error("Must be more than 0");
    else this._videoLikes = likes;
  }
}

const roadsidecoder = new Teacher("Piyush", "RoadsideCoder");
