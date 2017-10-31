//Refer comments in exports1.js
//then read this
function require (name) {
  var code = new Function('exports', readFile(name))
  var exports = {}
  code(exports)
  return exports
}

console.log(require('weekDay').name(1))

var names = ['Sunday', 'Monday', 'Tuesday', 'Wednesday',
  'Thursday', 'Friday', 'Saturday']

exports.name = function (number) {
  return names[number]
}
exports.number = function (name) {
  return names.indexOf(name)
}

var weekDay = require('weekDay')
var today = require('today')

console.log(weekDay.name(today.dayNumber()))

console.log(require('weekDay').name(1))
