var weekDay = {}; //semicolon is required or else get error 'intermediate value' is not function

(function(exports) {
  var names = ["Sunday", "Monday", "Tuesday", "Wednesday",
               "Thursday", "Friday", "Saturday"];

  exports.name = function(number) {
    return names[number];
  }
  exports.number = function(name) {
    return names.indexOf(name);
  }
})(weekDay)

console.log(weekDay.name(weekDay.number("Saturday")));

/*You are passing empty object to anonymous function. 
This anonymous function is a module. 
You are associating all its method to this empty object 
Then access all the method using this object name*/