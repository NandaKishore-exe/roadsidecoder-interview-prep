// Map, filter, Reduce - O/P Based Questions

let students = [
  { name: "Piyush", rollNumber: 31, marks: 80 },
  { name: "Jenny", rollNumber: 15, marks: 69 },
  { name: "Kaushal", rollNumber: 16, marks: 35 },
  { name: "Dilpreet", rollNumber: 7, marks: 55 },
];

const result = students
  .filter((student) => student.marks > 60)
  .map((student) => student.name);

// console.log(result);

const totalMarks = students
  .map((student) => {
    if (student.marks < 60) {
      student.marks += 20;
    }
    return student;
  })
  .filter((student) => student.marks > 60)
  .reduce((acc, curr) => {
    return acc + curr.marks;
  }, 0);

console.log(totalMarks);

// pending revision of map, filter, reduce questions as well as polyfills....
