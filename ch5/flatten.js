
var array = []
function reducer (data) {

  
  data.forEach((arr) => {
    //console.log(arr,arr.length)
    if(arr.length >= 1) { reducer(arr)} else array.push(arr)})
  //console.log("array is",array)
  return array


}

var arrays = [[1, 2, 3], [4, 5], [6]];
console.log(reducer(arrays))
console.log(arrays.reduce(function(flat, current) {
  console.log("flat is",flat)
  console.log("current is",current)
  return flat.concat(current);
}, []));
// Your code here.
// → [1, 2, 3, 4, 5, 6]