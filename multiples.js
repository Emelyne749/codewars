/*Your Job
Find the sum of all multiples of n below m

Keep in Mind
n and m are natural numbers (positive integers)
m is excluded from the multiples
Examples
sumMul(2, 9)   ==> 2 + 4 + 6 + 8 = 20
sumMul(3, 13)  ==> 3 + 6 + 9 + 12 = 30
sumMul(4, 123) ==> 4 + 8 + 12 + ... = 1860
sumMul(4, -7)  ==> "INVALID"*/


console.log(sumMul(2, 9));
function sumMul(n,m){
  if (n <= 0 || m <= 0) {
    return "INVALID";
  }
  let sum = 0;
  for (let i = n; i < m; i += n) {
    sum += i;
  }
  return sum;
}