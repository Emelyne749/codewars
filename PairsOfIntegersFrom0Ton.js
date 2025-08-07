/*
Write a function that accepts an integer argument n and generates an array containing the pairs of integers [a, b] that satisfy the condition

0 <= a <= b <= n
The pairs should be sorted by increasing values of a, then by increasing values of b.

For example,

for input: 2
it should return: [  [0, 0], [0, 1], [0, 2],  [1, 1], [1, 2],  [2, 2]  ]
*/

function generatePairs(n) {
    let result = []
    for(let i=0;i<=n;i++){
        for(let j =0;j<=i;j++){
            result.push([j,i])
        }
    }
    return result.sort((a,b)=>a[0]-b[0])
  
}