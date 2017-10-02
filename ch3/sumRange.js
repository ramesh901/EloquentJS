function range(x,y,step = 1){
  var arr = []
  var i = x
  if(step > 0){
    while(i <= y) {
      arr.push(i)
      i += step
    }
  }
  else{
    while(i >= y) {
      arr.push(i)
      i += step
    }
  }
  return arr
}

function sum(x){
  return x.reduce((x,y) => x+y)
}
console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55