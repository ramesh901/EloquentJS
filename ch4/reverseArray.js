function reverseArray(arr) {
  var revArr = []
  for(var i = 0;i< arr.length;i++) {
    revArr.unshift(arr[i])// unshift is opposite of push. Push add element in the end.
    //unshift add element in the beginning.
  }
  return revArr
}

function reverseArrayInPlace(arr) {
  var last = arr.length - 1;
  var temp
  for (var i = 0,j = arr.length - 1 ;i <= Math.floor(arr.length/2);i++, j--) {
    temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
  }
}

console.log(reverseArray(["A", "B", "C"]));
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);

/*

function reverseArrayInPlace(array) {
  for (var i = 0; i < Math.floor(array.length / 2); i++) {
    var old = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = old;
  }
  return array;
}

The actual book code is better. It doesn't use additional variable (j) because the swap is
symmetry so you can use arr.length without additional variable

*/



