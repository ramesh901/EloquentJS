let ANCESTRY_FILE = require('./data.js')
let ancestry = JSON.parse(ANCESTRY_FILE)
/**************************************
Lesson 1- Don't assign 'forEach' expression to any variable. Because it always 
return undefined
Lesson 2 - Difference between 'map' and 'forEach' is that map return modified array
'forEach' doesn't return anything.

***************************************/
//My Code
//BAD THING IS I used global variable 
var nameAge = []
var names = ancestry.forEach(function(person) {
  var entry = {}
  var age = person.died - person.born
  if( age > 90) {
    entry[person.name] = age
    //console.log(entry)
    nameAge.push(entry)
    

  }
  //return entry
})

console.log("output of first version of code:",nameAge)
//console.log(names)
//============================================
//MODIFIED VERSION
//============================================
function over90() {
  var nameAge90 = []
  ancestry.forEach(function(person) {
    var entry = {}
    var age = person.died - person.born
    if( age > 90) {
      entry[person.name] = age
      //console.log(entry)
      nameAge90.push(entry)
      

    }
    //return entry
  })
  return nameAge90
}

console.log("calling over90 function",over90())
//console.log(nameAge90) // YOU CAN'T ACCESS nameAge90 AS ITS LOCAL OF over90()

//==========================================

function map(array, transform) {
  var mapped = [];
  for (var i = 0; i < array.length; i++)
    mapped.push(transform(array[i]));
  return mapped;
}

var overNinety = ancestry.filter(function(person) {
  return person.died - person.born > 90;
});

//console.log("overNinety",overNinety  )
console.log("output of Book code:",map(overNinety, function(person) {
  var age = person.died - person.born
  var entry = {} //INITIALISING EMPTY OBJECT IS IMPORTANT. YOU CAN'T DO {person.name : age}
  entry[person.name] = age
  return entry;
}));
