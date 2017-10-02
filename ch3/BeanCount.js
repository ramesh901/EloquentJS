function countBs(s) {
  var count = 0
  for (var i = 0;i < s.length; i++){
    if(s.charAt(i) == 'B')
      count++
    }
    return count
}

function countChar(s, ch) {
  var count = 0
  for (var i = 0;i < s.length; i++){
    if(s.charAt(i) == ch)
      count++
    }
    return count
}

console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));