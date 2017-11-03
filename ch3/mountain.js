
var m = mountain()
console.log(m)

function mountain(){
  let result = ""
  function underscore(val){
    for(var i = 0; i < val; i++)
      result += "_"
  }
  function high(value){
    result += "/"
    for( var i = 0;i < value; i++){
      
      result += "'"
    }
  result += "\\"
  }
  underscore(3)
  high(4)
  underscore(6)
  high(1)
  underscore(1)
  return result
}


// → ___/''''\______/'\_
