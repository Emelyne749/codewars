function thanosSort(arr) {
  if (arr.length === 0) return 0
​
  let sorted = true
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      sorted = false
      break
    }
  }
​
  if (sorted) return arr.length
  if (arr.length === 1) return 1
​
  let mid = Math.ceil(arr.length / 2)
​
  let left = arr.slice(0, mid)
  let right = arr.slice(mid)
​
  return Math.max(thanosSort(left), thanosSort(right))
}