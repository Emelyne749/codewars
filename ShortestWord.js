//Simple, given a string of words, return the length of the shortest word(s).
//String will never be empty and you do not need to account for different data types.

function findShort(s){
  let words = s.split(" ");
  let shortest = words[0].length
  for (let i = 1; i < words.length; i++) {
    if (words[i].length < shortest) {
      shortest = words[i].length
    }
  }
  return shortest;
}
var greatings = "hello my darling have a nice day"
var a = findShort(greatings);
console.log(a)