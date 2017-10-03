/*
function arrayToList(arr, curr = null){
  if(curr = arr.shift())
    return {value: curr, rest: arrayToList(arr)}
  
  return null
}
*/
function arrayToList1 (array, entry = { value: null, rest: null }) {
  if (array.length === 0) {
    return entry
  }

  return {
    value: array[0],
    rest: arrayToList1(array.slice(1), null)
  }
}

console.log(arrayToList1([])) // empty
console.log(JSON.stringify(arrayToList1([10,20,30,40,50]))) // falsy

var a = [10,20,30,40,50]
//console.log(JSON.stringify(arrayToList(a)));
//console.log(a)