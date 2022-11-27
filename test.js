//----- Classroom Management ------//

const students = [{
  age: 32,
  examScores: [],
  gender: 'male',
  name: 'edu'
},
{
  age: 29,
  examScores: [],
  gender: 'female',
  name: 'silvia'
},
{
  age: 24,
  examScores: [],
  gender: 'male',
  name: 'francisco'
  },
  {
  age: 33,
  examScores: [],
  gender: 'male',
  name: 'carlos'
  },
  {
  age: 34,
  examScores: [],
  gender: 'female',
  name: 'isabel'
  },
  {
  age: 34,
  examScores: [],
  gender: 'female',
  name: 'luisa'
  },
  {
  age: 27,
  examScores: [],
  gender: 'female',
  name: 'ana'
  },
]

const availableMaleNames = ['pepe', 'juan', 'victor', 'Leo', 'francisco', 'carlos'];
const availableFemaleNames = ['cecilia', 'ana', 'luisa', 'silvia', 'isabel', 'virginia'];
const availableGenders = ['male', 'female'];

//---- MUST HAVES ---//
// 1 - Show students in table form 
//console.table(students)

// 2 - Show how many students there are in a class
//console.log(students.length)

// 3 - Show all the student's names
const names = students.map(student => student.name);
//console.log(names)

// 4 - Delete the last student in the class
students.pop()
//console.log(students)

// 5 - delete random student in class 
students.splice((Math.random() * students.length) | 0, 1); 
//console.log(students)

// 6 - Show all female students 
const femaleStudents = students.filter(student => student.gender === 'female');
//console.log('Female Students: ', femaleStudents);

// 7 - Show the number of males / females in the class 
const maleStudents = students.filter(student => student.gender === 'male');
//const femaleStudents = students.filter(student => student.gender === 'female');
//console.log("Male Students: ", maleStudents.length)
//console.log("Female Students: ", femaleStudents.length)

// 8 - Show true or false if all the students in the class are female 
const allFemale = students.every(student => student.gender === 'female');
//console.log("Are all the students female?: ", allFemale)

// 9 - Show all the students names who are between 20 and 25 years old
const ageFilter = students.filter(student => student.age >= 20 && student.age <= 25);
const ageFilterNames = ageFilter.map(student => student.name)
//console.log("Students between the ages of 20 - 25 are: ", ageFilterNames)

// 10 - Add a new student with the following info:
    //- random gender 
const genderSelector = availableGenders[Math.floor(Math.random() * availableGenders.length)];

   //- random name 
const nameGenerator = genderSelector === 'female'? availableFemaleNames[Math.floor(Math.random() * availableFemaleNames.length)] : availableMaleNames[Math.floor(Math.random() * availableMaleNames.length)];

   //- age between 20 - 50
function generateRandomNumber(min, max) {
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNumber
}
let ageGenerator = generateRandomNumber(20, 50);

   //- examScors list empty 
students.push({age: ageGenerator, examScores: [],  gender: genderSelector, name: nameGenerator});
//console.log(students) 


// 11 - Show the youngest person's name
    // first get students ages: 
const studentsAge = students.map(student => student.age)
    // then get lowest number from the age range:
const lowestAge = Math.min(...studentsAge);
//console.log(lowestAge)


// 12 - Show the average age of all the students in the class 
//const studentsAge = students.map(student => student.age)
const averageAge = studentsAge.reduce((a, b) => a + b, 0) / studentsAge.length;
//console.log(Math.floor(averageAge));


// 13 - Show the average age of women in the class
//const femaleStudents = students.filter(student => student.gender === 'female')
const femaleAges = femaleStudents.map(student => student.age)
const averageFemaleAge = femaleAges.reduce((a, b) => a +b, 0) / femaleAges.length;
//console.log(Math.floor(averageFemaleAge))

// 14 - Add a new grade to the students. For every student in the class, we have to calculate the grade randomly (0, 10) and add them to their grade list 
function generateRandomNumber(min, max) {
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNumber
}

students.forEach(student => student.examScores.push(generateRandomNumber(0, 10)));
console.log("Students results: ", students)

//15 - Order the 'students' array alphabetically
students.sort((a, b) => {
  const aName = a.name.toLowerCase()
  const bName = b.name.toLowerCase()
  if (aName < bName) {
    return - 1;
  }
  if (aName > bName) {
    return 1;
  }
  return 0;
});

//console.log('Alphabetical student list: ', students)*/

// 16  - Show the student with the highest grade
//const studentsGrade = students.map(student => student.examScores);
//console.log(Math.max(...studentsGrade));
//const totalStudentGrade = studentsGrade.reduce((add, a) => add + a, 0);
//console.log(totalStudentGrade);

// 17 - Show the highest average grade of the class and the student's name who achieved it

// 18 - Add an extra point to every existing grade of all students. Remember the highest grade is 10. If students still don't have any grades scored, give them a 10