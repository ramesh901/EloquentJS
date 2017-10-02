// My code
var g = ''
for (var i = 1; i <= 7; i++) {
  g += '#'
  console.log(g)
}

/* Actual book code
for (var line = "#"; line.length < 8; line += "#")
  console.log(line);

Explanation - I was thinking I cannot assign special character in for loop and increment
as part of for loop
*/
