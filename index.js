export const students = [{
  age: 32,
  examScores: [],
  gender: 'male',
  name: 'edu'
  },
  {
  age: 37,
  examScores: [],
  gender: 'female',
  name: 'silvia'
  },
]

export const availableMaleNames = ['pepe', 'juan', 'victor', 'Leo', 'francisco', 'carlos', 'edu'];
export const availableFemaleNames = ['cecilia', 'ana', 'luisa', 'silvia', 'isabel', 'virginia'];
export const availableGenders = ['male', 'female'];


// ---- Useful code ----//

//user option selector
const caseOptions = 'Input a number from the following list to access its functionality: \nTo exit the App, input 0\n#1: Student table\n#2: Number of students in the class\n#3: Student names\n#4: Delete the last student in the list\n#5: Delete a random student\n #6: Number of female students\n#7: Male/Female ratio\n#8: Are all the students female? T/F\n#9: Students between 20 - 25 years old\n#10: Add a new student to the list\n#11: Youngest student\n#12: Average age\n#13: Average female age\#14: Add a new random grade between 0 - 10 to each student\n#15: Order student list alphabetically\n#16: Highest grade\n#17: Student with average highest grade\n#18: Add an extra point to each existing grade for all students\n'

export const userOptions = () => (
  console.log(caseOptions)
)

//testing input number 
export const isInt = (num) => {
  return !Number.isNaN(num)
}

//random number 
export function generateRandomNumber(min, max) {
const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
return randomNumber;
}
