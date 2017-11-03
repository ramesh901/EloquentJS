for(var i = 1;i <= 100;i++){
  var obj = ''
  if(i%3 === 0){
    obj = 'Fizz'
  }
  else if(i%5 === 0){
    obj = 'Buzz'
  }
  console.log(obj || i)
}