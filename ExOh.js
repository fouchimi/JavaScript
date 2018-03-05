function ExOh(str) {
  str = str.toLowerCase();
  let countO = 0;
  let countX = 0;	
  for(let i = 0; i < str.length; i++) {
    if(String(str.charAt(i)) === 'o') countO++;
    if(String(str.charAt(i)) === 'x') countX++;
  }	
  
  if(countO === countX) return "true";
  else return "false";	
}

console.log(ExOh("xooxxo"));
console.log(ExOh("x"));
