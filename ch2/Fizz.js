for (var i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) { console.log('FizzBuzz'); continue }
  if (i % 3 === 0) { console.log('Fizz'); continue }
  if (i % 5 === 0) { console.log('Buzz'); continue }
  console.log(i)
}

/*
Actual code
for (var n = 1; n <= 100; n++) {
  var output = "";
  if (n % 3 == 0)
    output += "Fizz";
  if (n % 5 == 0)
    output += "Buzz";
  console.log(output || n);
}

Learned about using logical OR in console.log

Another way of seeing it. There is one main track 1 to 100.
And subtrack for special condition n% 3 and n%5. You merge subtrack into 
main track using ||
*/
