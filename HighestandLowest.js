/*
In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Examples
highAndLow("1 2 3 4 5"); // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
*/

function highAndLow(numbers){
    let arr = numbers.split(" ")
  const max= arr.reduce((high,n)=>Number(n)>high? high=Number(n):high,Number(arr[0]))
  const min = arr.reduce((low,n,)=>Number(n)<low? low=Number(n):low,Number(arr[0]))
  return `${max} ${min}`
}