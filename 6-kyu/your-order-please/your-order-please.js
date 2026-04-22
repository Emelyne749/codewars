function order(words){
  let result = [1,2,3,4,5,6,7,8,9]
  let list = words.split(" ")
  list.map((word)=>{
    let chars = word.split("")
    let [nbr] = chars.filter((a)=> result.includes(Number(a)))
    result[Number(nbr)-1] = word
  })
    
  return  result.filter(a=>typeof(a)=="string").join(" ")
}