/*
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
*/

function getCount(str) {
  var vowel = "aeiou"
  return str.split("").reduce((count,char)=> vowel.includes(char)? ++count:count,0)
}

console.log(getCount("hello my friend"));