/*Complete the solution so that it reverses all of the words within the string passed in.
Words are separated by exactly one space and there are no leading or trailing spaces.
Example(Input --> Output):
"The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"*/

var string = "Hello dear friend long time no see";
var reversedstring= reverseWords(string);
function reverseWords(str){
  str = str.split(" ");
   str.reverse();
   str = str.join(" ");
  return str;
}
console.log(reversedstring);