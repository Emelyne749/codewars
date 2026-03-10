function pizzaRewards(customers, minOrders, minPrice) {
    let mySet = []
    let c=[]
  for (const customer in customers){
    
    let p = []
    for (let i of customers[customer]){
        
        if(i>=minPrice) {
           p.push(i) 
        }
        else{
            continue
        }
    }
    customers[customer]= p.length
    console.log(p.length)
    if(p.length>=minOrders){
        mySet.push(customer)
    }
    
  }
 return mySet; 
}