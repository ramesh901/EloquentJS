let ANCESTRY_FILE = require('./data.js')
let ancestry = JSON.parse(ANCESTRY_FILE)

var cent = []
ancestry.forEach((p) => {
  p['century'] = Math.ceil(p.died / 100)
  cent.push(p['century'])
})

let unique = cent.filter((it, i, ar) => ar.indexOf(it) === i)

var centuryAge = unique.map((e) => {
  var entry = {}
  entry[e] = ancestry.filter((p) => p['century'] === e)
  var len = entry[e].length
  var final = entry[e].reduce((acc, p) => acc + (p.died - p.born), 0) / len
  entry[e] = final
  return entry
})
console.log(centuryAge)

/*
var fil = ancestry.filter( (p) => p["century"] === 16)
var val = fil.reduce((acc,p) => acc + (p.died - p.born),0)/fil.length
console.log(fil)
console.log(val)
*/

var acc = []
ancestry.forEach(function (p) {
  if (acc.indexOf(p['century']) === -1) {
    console.log('i am inside', acc)
    acc.push(p['century'])

    console.log('acc inside', acc)
  }
})

console.log('acc is', acc)
  // if(acc.indexOf(p["century"]) === -1) {

  // }

// console.log(uniques)
