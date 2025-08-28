/*
Write a function that takes an array / list of numbers and returns a number.

See the examples and try to guess the pattern:

(1, 2, 6, 1, 6, 3, 1, 9, 6) => 393
(1, 2, 3)                   =>   5
(0, 2, 3)                   =>   3
(1, 0, 3)                   =>   3
(3, 2)                      =>   6
*/



function EvenOdd(arr){
  return arr.reduce((result, a, i)=> (i%2==1)? result*a: result+a, 0)
}