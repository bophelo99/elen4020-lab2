const course = {
  courseCode: 'ELEN3010'
}
console.log(course) // print the entire object
// access the object's properties
console.log(` student's ourseCode is ${course.ourseCode}`)

const addyearOffered = function (theourseCode, coursecode) {
  theourseCode.yearOffered = coursecode.includes('40') ? 4 : 3 // add a new property called age to the student
}
addyearOffered(course, course.courseCode)
console.log(course)

const courseinformation = function (thecourse) {
  console.log(` ${thecourse.courseCode} is offered in year ${thecourse.yearOffered} `)
}
courseinformation(course)
