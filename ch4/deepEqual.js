
function deepEqual (obj1,obj2) {
 if (JSON.stringify(obj1) === JSON.stringify(obj2)) {
  return true
  //var obj1PropsCount = 0, obj2PropsCount = 0
  //console.log("obj1.keys().count()",Object.keys(obj1).length)
  //console.log("obj2.keys().count()",Object.keys(obj2).length)
  //for(var i in obj1 && var j in obj2) {
    //if(obj1[i] === obj2[j])

  }

  return false
}
var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "and"}, object: 2}));
// → 