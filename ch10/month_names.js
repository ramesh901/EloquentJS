var month = function() {
  names = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  return  {
    name: function(arg){return names[arg]} ,
    number: function(arg){return names.indexOf(arg)}
  }

}()

console.log(month.name(2));
// → March
console.log(month.number("November"));