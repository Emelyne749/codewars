// Description:
// Create a function that takes a positive integer and returns the next bigger number that can be formed by rearranging its digits. For example:

//   12 ==> 21
//  513 ==> 531
// 2017 ==> 2071
// If the digits can't be rearranged to form a bigger number, return -1 (or nil in Swift, None in Rust):
//   9 ==> -1
// 111 ==> -1
// 531 ==> -1
// Strings



function nextBigger(n) {
  const digits = String(n).split('').map(Number);

  let i = digits.length - 2;
  while (i >= 0 && digits[i] >= digits[i + 1]) {
    i--;
  }
  if (i < 0) return -1;

  let j = digits.length - 1;
  while (digits[j] <= digits[i]) {
    j--;
  }

  [digits[i], digits[j]] = [digits[j], digits[i]];

  const right = digits.splice(i + 1).sort((a, b) => a - b);

  return Number(digits.concat(right).join(''));
}