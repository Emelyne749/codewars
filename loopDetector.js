/*
In this kata, you'll simulate traversing a one-way pointer chain, similar to a singly linked list. Each element in the input list represents the index of the next element to move to.

Your task is to determine whether this chain eventually enters a loop, or whether it terminates by stepping out of bounds.

Function Signature
arr is a list or array of non-negative integers.

Return True (or your language's equivalent) if the traversal enters a loop.

Return False (or your language's equivalent) if the traversal terminates.
*/

function hasLoop(indices) {
    let visited = []
    let i = 0
    while (i<= indices.length){
        if(visited.includes(indices[i])){
            return true
        }
        
        else{
            visited.push(indices[i])
            i=indices[i]
        }
        
    }
    return false
}
