let ANCESTRY_FILE = require('./data.js')
let ancestry = JSON.parse(ANCESTRY_FILE)

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

function momYear(lookup) {
    if(lookup in byName) {
      return byName[lookup].born
    }
  }

ageDiff = ancestry.map(function(p) {
  return(p["born"] - momYear(p["mother"]))
})

ageDiffArray = ageDiff.filter((p) => p > 0) //to exclue NaN from the array


console.log(ageDiffArray.reduce((sum,num) => sum + num ,0)/ageDiffArray.length)


//BOOK CODE

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var differences = ancestry.filter(function(person) {
  return byName[person.mother] != null;
}).map(function(person) {
  return person.born - byName[person.mother].born;
});

console.log(average(differences));
