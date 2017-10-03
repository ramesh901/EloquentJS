var data = require('./04_data.js')
function tableFor(event,data) {
  table = [0,0,0,0]
  //table[0] = No Event, No squirrel, table[1] = No Event, squirrel: true
  //table[2] = Event: true, squirrel: false, table[3] = Event: true, squirrel: true
  for( var i = 0; i < data.length;i++){
    index = 0
    //This is optimal way of covering four scenarios with just 2 'if' condition
    //The first 'if' is INCORRECT
    if(event in data[i].events) 
      index += 2
    if(data[i].squirrel)
      index += 1
    table[index] +=1
  }
return table
}

console.log(tableFor("pizza",data))//Incorrect values in output

/*array.find() and array.indexOf() are the two built-in function to know whether
element present in array*/

function tableFor1(event,data) {
  table = [0,0,0,0]
  //table[0] = No Event, No squirrel, table[1] = No Event, squirrel: true
  //table[2] = Event: true, squirrel: false, table[3] = Event: true, squirrel: true
  for( var i = 0; i < data.length;i++){
    index = 0
    //This is optimal way of covering four scenarios with just 2 'if' condition
    //The first 'if' is INCORRECT
    if(data[i].events.indexOf(event) ) 
      index += 2
    if(data[i].squirrel)
      index += 1
    table[index] +=1
  }
return table
}

console.log(tableFor1("pizza",data))//CORRECT VALUE