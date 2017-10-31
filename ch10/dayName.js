function dayName (n) {
  let name = ['S', 'M', 'T', 'W', 'TH', 'F']
  return name[n]
}

// s =
console.log(dayName(2))

// Follow this when you have multiple functions work on same local variable
var weekDay = (function () {
  let names = ['S', 'M', 'T', 'W', 'TH', 'F']
  return {
    name: function (number) { return names[number] }, // this comma is important
    num: function (name) { return names.indexOf(name) }
  }
}())

console.log(weekDay.num('W'))
console.log(weekDay.name(2))
