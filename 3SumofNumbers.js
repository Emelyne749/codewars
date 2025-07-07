function getSum(a, b)
{
  let sum =0;
  if(a<b){
    for (i=a;i<=b;i++){
      sum+=i;
    }
  }
  else if (a>b){
    for (i=b;i<=a;i++){
      sum+=i;
    }
  }
   if(a==b){
     sum=a;
    }
   return sum;//Good luck!
}