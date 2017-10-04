let ANCESTRY_FILE = require('./data.js')
let ancestry = JSON.parse(ANCESTRY_FILE)

/*
person = ancestry.filter((person) => {return function(gender) {
  return person["sex"] === gender}
})

console.log(person("m"))
*/

male = ancestry.filter( function(person) {
  return person["sex"] === "m"
})

maleSumAge = male.reduce(function(sum,person) {
  sum += (person.died - person.born)
 return sum
},0)

female = ancestry.filter( function(person) {
  return person["sex"] === "f"
})

femaleSumAge = female.reduce(function(sum,person) {
  sum += (person.died - person.born)
 return sum
},0)

console.log("male average age:",maleSumAge/male.length)
console.log("female average age:",femaleSumAge/female.length)

//BOOK CODE

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}
function age(p) { return p.died - p.born; }
function male(p) { return p.sex == "m"; }
function female(p) { return p.sex == "f"; }

console.log(average(ancestry.filter(male).map(age)));
// → 61.67
console.log(average(ancestry.filter(female).map(age)));
// → 54.56