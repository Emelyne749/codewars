function validBraces(braces){
    let temp = []
​
    for(let brace of braces){
        
        if(brace === '(' || brace === '{' || brace === '['){
            temp.push(brace)
        } else {
            let len = temp.length
​
            if(brace === ')' && temp[len - 1] === '('){
                temp.pop()
            }
            else if(brace === '}' && temp[len - 1] === '{'){
                temp.pop()
            }
            else if(brace === ']' && temp[len - 1] === '['){
                temp.pop()
            }
            else {
                return false 
            }
        }
    }
​
    return temp.length === 0
}