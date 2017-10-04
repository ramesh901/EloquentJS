let ANCESTRY_FILE = require('./data.js')
let ancestry = JSON.parse(ANCESTRY_FILE)

/*
person = ancestry.filter((person) => {return function(gender) {
  return person["sex"] === gender}
})

console.log(person("m"))
*/

var male = ancestry.filter(function (person) {
  return person['sex'] === 'm'
})

var maleSumAge = male.reduce(function (sum, person) {
  sum += (person.died - person.born)
  return sum
}, 0)

var maleTotalAge = ancestry.reduce(function (sum, person) {
  if (person['sex'] === 'm') {
    sum += (person.died - person.born)
  }
  return sum
}, 0)

var female = ancestry.filter(function (person) {
  return person['sex'] === 'f'
})

var femaleSumAge = female.reduce(function (sum, person) {
  sum += (person.died - person.born)
  return sum
}, 0)

console.log('male average age:', maleSumAge / male.length)
console.log('male average age- maleTotalAge:', maleTotalAge / male.length)
console.log('female average age:', femaleSumAge / female.length)

// BOOK CODE

function average (array) {
  function plus (a, b) { return a + b }
  return array.reduce(plus) / array.length
}
function age (p) { return p.died - p.born }
function males (p) { return p.sex === 'm' }
function females (p) { return p.sex === 'f' }

console.log(average(ancestry.filter(males).map(age)))
// → 61.67
console.log(average(ancestry.filter(females).map(age)))
// → 54.56
