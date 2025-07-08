/*Create a method to see whether the string is ALL CAPS.
Examples (input -> output)
"c" -> False
"C" -> True
"hello I AM DONALD" -> False
"HELLO I AM DONALD" -> True
"ACSKLDFJSgSKLDFJSKLDFJ" -> False
"ACSKLDFJSGSKLDFJSKLDFJ" -> True
In this Kata, a string is said to be in ALL CAPS whenever it does not contain any lowercase letter so any string
 containing no letters at all is trivially considered to be in ALL CAPS.*/

str ="BOB WALKS HIS DOG EVERY DAY."
var x = str.split("").filter(char => char.toLowerCase() !== char.toUpperCase()).every(
    char => char >= 'A' && char <= 'Z'
    )
console.log(x)