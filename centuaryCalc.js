// Return the century of the input year. The input will always be a 4 digit string, so there is no need for validation.

// Examples
// "1999" --> "20th"
// "2011" --> "21st"
// "2154" --> "22nd"
// "2259" --> "23rd"
// "1124" --> "12th"
// "2000" --> "20th"

function whatCentury(year)
{   
  let n = Number(year)
  let centuary = Math.floor((n - 1) / 100) + 1
  
  if(centuary<20 && centuary>10) {return `${centuary}th`}
  else{
    let c = centuary.toString().split("")
    if(c[1]=="1") return `${centuary}st`
    else if(c[1]=="2") return `${centuary}nd`
    else if(c[1]=="3") return `${centuary}rd`
    else return `${centuary}th`
  }
}  