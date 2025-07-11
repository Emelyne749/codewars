var str ="aaaaaaaa"
var res = change(str);
function change(string) {
  let output = Array(26).fill('0');
  string = string.toLowerCase();
  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    if (char >= 'a' && char <= 'z') {
      output[char.charCodeAt(0) - 'a'.charCodeAt(0)] = '1';
 }
  }
  return output.join('');
}
console.log(res)