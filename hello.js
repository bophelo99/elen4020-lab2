'use strict'
const array = [1, 2, 3, 4, 5]
const functionToApply = function (element) {
  element **= 2
  return element
}
const newArray = []
const map = function (functionToApply, array) {
  array.forEach(function (element) {
    console.log(`${functionToApply(element)}`)
    newArray.push(functionToApply(element))
  })
}
const map1 = array.map(x => x * 2)

console.log(map1)
console.log(map(functionToApply, array))
console.log(newArray)
