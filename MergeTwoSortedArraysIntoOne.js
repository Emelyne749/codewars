/*
You are given two sorted arrays that contain only integers. These arrays may be sorted in either ascending or descending order. Your task is to merge them into a single array, ensuring that:

The resulting array is sorted in ascending order.

Any duplicate values are removed, so each integer appears only once.

If both input arrays are empty, return an empty array.

No input validation is needed, as both arrays are guaranteed to contain zero or more integers.
*/
function mergeArrays(arr1, arr2) {
  let result = [...arr1,...arr2]
  return result.sort((a,b)=> a-b).filter((a,b,arr)=>arr.indexOf(a)== b)
}
console.log(mergeArrays([2,9,4,0], [1,4,8,0]));