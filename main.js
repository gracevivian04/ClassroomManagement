import readline from 'readline';
import {
  students,
  availableFemaleNames,
  availableMaleNames,
  availableGenders,
  generateRandomNumber,
  isInt,
  userOptions
} from './index.js';


const rl = readline.createInterface(
  {
    input: process.stdin,
    output: process.stdout,
  });

function getOptionFromConsole(){
  const promise = new Promise((resolve, reject) => {
    rl.question('Choose an option: ', (num) => {
      rl.pause();
      if (isInt(num)) {
        num = Number.parseInt(num);
        resolve(num);
      } else {
        reject('Introduce a valid number: ');
      }
    })
  })
  return promise;
}

export async function displayOptions(){
  let consoleNumber
  let studentsAge
  let studentsGrade
  let femaleStudents

  do {
    try {
      userOptions()
      consoleNumber = await getOptionFromConsole();
    } catch (error) {
      console.log(error)
      process.exit(0)
    }

  //user options
  switch(consoleNumber) {
    case 1:
      //show students in table form
      console.table(students);
      break;

    case 2:
      //show how many students there are in the class
      console.log('Total number of students: ', students.length);
      break;

    case 3:
      //show all the student's names
      const names = students.map(student => student.name);
      console.log("Student's names: ", names);
      break;
    
    case 4:
      //delete the last student in the class
      students.pop();
      console.log('New student list: ', students);
      break;

    case 5:
      //delete a random student in class 
      students.splice((Math.random() * students.length) | 0, 1); 
      console.log('New student list: ', students);
      break;

    case 6:
      //show all female students 
      femaleStudents = students.filter(student => student.gender === 'female');
      console.log('Female Students: ', femaleStudents);
      break;

    case 7:
      //show the number of males / females in the class 
      femaleStudents = students.filter(student => student.gender === 'female');
      const maleStudents = students.filter(student => student.gender === 'male');
      console.log("Male Students: ", maleStudents.length);
      console.log("Female Students: ", femaleStudents.length);
      break;

    case 8:
      //show true or false if all the students in the class are female 
      const allFemale = students.every(student => student.gender === 'female');
      console.log("Are all the students female?: ", allFemale);
      break;

    case 9:
      //show all the students names who are between 20 and 25 years old
      const ageFilter = students.filter(student => student.age >= 20 && student.age <= 25);
      const ageFilterNames = ageFilter.map(student => student.name);
      console.log("Students between the ages of 20 - 25 are: ", ageFilterNames);
      break;

    case 10:
      //add a new student with the following info:
      //- random gender 
      const genderSelector = availableGenders[Math.floor(Math.random() * availableGenders.length)];

      //- random name 
      const nameGenerator = genderSelector === 'female'? availableFemaleNames[Math.floor(Math.random() * availableFemaleNames.length)] : availableMaleNames[Math.floor(Math.random() * availableMaleNames.length)];

      //- age between 20 - 50
      let ageGenerator = generateRandomNumber(20, 50);

      //- examScors list empty 
      students.push({age: ageGenerator, examScores: [],  gender: genderSelector, name: nameGenerator});
      console.log(students);
      break;

    case 11:
      //show the youngest person's name
      //first get students ages: 
      studentsAge = students.map(student => student.age);
      // then get lowest number from the age range:
      const lowestAge = Math.min(...studentsAge);
      const youngestStudent = students[studentsAge.indexOf(lowestAge)];
      const youngestStudentName = students.length > 0 ? youngestStudent.name : "There aren't any students in this class. To add a new student, please select option 10.";
      console.log('The youngest student is: ', youngestStudentName);
      break;

    case 12:
      //show the average age of all the students in the class 
      const averageAge = studentsAge.reduce((a, b) => a + b, 0) / studentsAge.length;
      console.log('Average student age is: ', Math.floor(averageAge));
      break;

    case 13:
      //show the average age of women in the class
      femaleStudents = students.filter(student => student.gender === 'female');
      const femaleAges = femaleStudents.map(student => student.age)
      const averageFemaleAge = femaleAges.reduce((a, b) => a +b, 0) / femaleAges.length;
      console.log('Average age of female students is: ', Math.floor(averageFemaleAge));
      break;

    case 14:
      //add a new grade to the students. For every student in the class, we have to calculate the grade randomly (0, 10) and add them to their grade list
      students.forEach(student => student.examScores.push(generateRandomNumber(0, 10)));
      console.log("Students results: ", students);
      break;

    case 15:
      //order the 'students' array alphabetically
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

      console.log('Alphabetical student list: ', students);
      break;
    
    case 16:
      //show student with the highest grade
      studentsGrade = students.map(student => student.examScores);
      const sumStudentsGrades = Array.from(studentsGrade, (grades => grades.reduce((sum, n) => sum + n, 0)));
      const indexStudentsGrades = sumStudentsGrades.indexOf(Math.max(...sumStudentsGrades));
      const highestScoringStudent = students.length > 0 ? students[indexStudentsGrades].name : "There aren't any students in this class. To add a new student, please select option 10.";

      console.log("The highest achieving student is: ", highestScoringStudent);
      break;

    case 17:
      //show the highest average student grade and the student's name who achieved it 
      studentsGrade = students.map(student => student.examScores);
      const averageGrade = Array.from(studentsGrade, (grades => grades.length > 0 ? ((scores.reduce((sum, n) => sum + n, 0))/scores.length) : 0));
      const highestAverageGrade = students.length === 0 ? 0 : Math.max(...averageGrade);
      const averageIndex = averageGrade.indexOf(highestAverageGrade);
      const higestAverageStudent = averageGrade.every(avr => avr === 0) ? "There aren't any students with grades. Please add a new grade in option 14" : students[averageIndex].name;

      console.log('The highest average grade is: ', highestAverageGrade, 'for student: ' , higestAverageStudent);
      break;

    case 18:
      //add an extra point for all students (highest grade is 10, if they're still not registered, automatic 10)
      const extraPoint = () => {
        for (let i =0; i < students.length; i++) {
          const student = students[i]

          if (student.examScores.length !== 0) {
            student.examScores.map(grade => grade < 10 ? ++grade : grade);
            debugger;
          } else if (student.examScores.length === 0) {
            student.examScores.push(10);
          }
        } console.table(students)
      }
      console.log('Grades with extra point: ', extraPoint);
      break;
  } 
} while (consoleNumber > 0 && consoleNumber <= 18);
}