function counter(){
  var a = 0
  function inner(){
      console.log(++a)
    }

  return inner
  
}
counter()
counter()
var b = counter()
b()//1
b()//2
b()//3