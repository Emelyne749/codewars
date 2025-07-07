names=[["Frank", "Underwood"],["Claire", "Underwood"],["Douglas", '"Doug"', "Stamper"],["Zoe", "Barnes"], ["Peter", "Russo"], ["Remy", "Danton"], ["Former", "President", "Garrett", "Walker"]],
cities=["New York City","Los Angeles","Chicago","Houston","Philadelphia", "Detroit"],
states=["New York","California","Illinois","Texas","Pennsylvania", "Michigan"];
for(let i=0;i<cities.length;i++){
sayHello(names[i], cities[i], states[i]);
}
function sayHello( name, city, state ) {
  let fullname=name.join(" ")
  let message = `Hello, ${fullname}! Welcome to ${city}, ${state}!`;
  console.log(message);
}