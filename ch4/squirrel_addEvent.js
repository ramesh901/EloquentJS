var data = require('./data_samp.js')
//console.log(data)


/*Bad idea. You shouldn't expect "key" portion of the object also passed as 
argument. Only "value" portion should be passed as argument
*/
function addEvent(event) {
  data.unshift(event)
}


addEvent({"events":["brinjal"],"squirrel":false})
console.log("Bad Function addEvent",data)

/*The below function assume there are only one 'events' and one 'squirrel' within 
data object which is incorrect. We are dealing with array of objects within
data object */
function addEvent1(events,turnedIntoSquirrel) {
  data.events = events
  data.squirrel = turnedIntoSquirrel
}

addEvent1(["tomato rice"],false)
console.log("Data after executing addEvent1",data)

delete data.events
delete data.squirrel

console.log("Data after deletion of events and squirrel",data)

function addEvent2(events,turnedIntoSquirrel) {
  data.push({events:events, squirrel: turnedIntoSquirrel})
  
}


addEvent2(["curd rice"],false)
console.log("Data after 'push' data into data obj",data)

//using 'arguments.length' to find number of args in the function call

addEvent3(true,"Biriyani","Payasam")

function addEvent3(squirrel) {
  entry = {events: [], squirrel: squirrel}
  for(var i = 1;i < arguments.length;i++){
    entry.events.push(arguments[i])

  }
  data.push(entry)
 
}

console.log("Data after 'push' data into data obj using arguments.length",data)