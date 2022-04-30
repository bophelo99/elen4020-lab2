'use strict'
const students = [
  {
    name: 'Kwezi',
    studentNumber: 453528,
    yearOfStudy: 4
  },
  {
    name: 'Pieter',
    studentNumber: 454345,
    yearOfStudy: 3
  },
  {
    name: 'Jade',
    studentNumber: 678343,
    yearOfStudy: 4
  },
  {
    name: 'Kiren',
    studentNumber: 567893,
    yearOfStudy: 4
  }
]

const deleteStudent = function (student, theStudents) {
  if (theStudents.findIndex(function (element) {
    return element.name === student.name &&
             element.studentNumber === student.studentNumber &&
             element.yearOfStudy === student.yearOfStudy
  })) {
    theStudents.splice(theStudents.indexOf(student), 1)
  }
  return theStudents
}
console.log(students)

const modifiedArray = deleteStudent({
  name: 'Kiren',
  studentNumber: 567893,
  yearOfStudy: 4
}, students)

console.log(modifiedArray)
