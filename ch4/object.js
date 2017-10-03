var obj = {a : "test1", b: "test2"}
console.log(obj)
console.log(obj.a)
delete obj.a
console.log("obj.a after delete:",obj.a)
console.log("obj is",obj)
//below one is incorrect notation
console.log("b in obj-incorrect",obj.b in obj)
//Here is the correct notation
console.log("b in obj-correct","b" in obj)
