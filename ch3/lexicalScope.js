var adder = function (total) {

  // the following function is returned 
  // and assigned to adder
  console.log(total)
  var inner_function = function (summand) {
    console.log("summand is",summand)
    total += summand;
    console.log(total);
  }
  
  return inner_function;
  
}(0); // <- we call the annonymous function 
      //    and assign the returned function to adder

adder(2); // -> 2
adder(3); // -> 5

//Another version with total as local variable rather than argument

var adder1 = function(){
  var total = 0
  var inner_function = function (summand) {
    console.log("adder1 - summand is",summand)
    total += summand;
    console.log(total);
  }
  
  return inner_function;

}

var some1 = adder1(2); // -> 2
var some2 = adder1(3);
some1(10)
some1(12)

var adder2 = function(total){
  console.log(total)
  
  var inner_function = function (summand) {
    console.log("adder2 - summand is",summand)
    total += summand;
    console.log(total);
  }
  
  return inner_function;

}

var some3 = adder2(0)
some3(2)
some3(3)
