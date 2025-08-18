/*
You are going to be given a non-empty string. Your job is to return the middle character(s) of the string.

If the string's length is odd, return the middle character.
If the string's length is even, return the middle 2 characters.
Examples:
"test" --> "es"
"testing" --> "t"
"middle" --> "dd"
"A" --> "A"
*/

function getMiddle(s) {
    const len = s.length
  if (len%2==1){
     return s[Math.floor(len/2)]
  }
  else{
      return [s[len/2-1], s[len/2]].join("")
  }
}