//BAD CODE - works only for 2 array element
function arrayToList(arr) {
  var entry = { value: null, rest: null}
  for (var i = 0; i < arr.length; i++) {
    if(entry.value == null) 
      entry.value = arr[i]
    else{ 
      entry.rest = arrayToList([arr[i]])
        }
  }
  return entry
}

function arrayToList5(arr) {
    var obj = {value: null, rest: null}
    if(arr.length === 0){
        return null
    }
    obj.value = arr[0]
    obj.rest = arrayToList5(arr.slice(1))
    
    return obj 

}

//Code from the Book. You have to loop thru end to start
function arrayToList1(array) {
  var list = null;
  for (var i = array.length - 1; i >= 0; i--)
    list = {value: array[i], rest: list};
  return list;
}

function arrayToList2 (array, entry = { value: null, rest: null }) {
  if (array.length === 0) {
    return entry
  }
  return {
    value: array[0],
    rest: arrayToList2(array.slice(1), null)
  }
}

function arrayToList3(arr) {
  var entry = {};
  // Check if there are any members in arr
  if (arr.length) {
    // If there are, add the value
    entry.value = arr[0];
  }
  // If there are more entries, add them
  if (arr.length > 1) {
    // Call recursively without first element
    entry.rest = arrayToList3(arr.slice(1));
  // Otherwise, add null
  } else {
    entry.rest = null;
  }
  return entry;
}

function listToArray(obj) {
  var arr = []
  var temp = obj
  while(temp.rest !== null) {
    arr.push(temp.value)
    temp = temp.rest
    //console.log("temp is",temp)

  }
  arr.push(temp.value)
  return arr
}

//listToArray1 is book code
function listToArray1(list) {
  var array = [];
  for (var node = list; node; node = node.rest)
    array.push(node.value);
  return array;
}
console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(JSON.stringify(arrayToList1([10, 20, 30,40,50])));
console.log(JSON.stringify(arrayToList2([10, 20, 30,40,50])));
console.log(JSON.stringify(arrayToList3([10, 20, 30,40,50])));

console.log(JSON.stringify(arrayToList5([10, 20, 30,40,50])));
//arr.rest.push(entry)
console.log(listToArray({ value: 10,
  rest: { value: 20, rest: { value: 30, rest: null } } }));
// → [10, 20, 30]
