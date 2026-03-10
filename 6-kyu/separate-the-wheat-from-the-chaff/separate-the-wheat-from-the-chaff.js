function wheatFromChaff(values) {
  let left = 0;
  let right = values.length - 1;
​
  while (left < right) {
    if (values[left] < 0) {
      left++;
      continue;
    }
​
    // move right backward if already positive
    if (values[right] >= 0) {
      right--;
      continue;
    }
    [values[left], values[right]] = [values[right], values[left]];
​
    left++;
    right--;
  }
​
  return values;
}