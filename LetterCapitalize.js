function LetterCapitalize(str) {
  let strs = str.split(" ");	
  let result = "";	
  for(let i = 0; i < strs.length; i++) {	  
     result += strs[i].charAt(0).toUpperCase() + strs[i].substring(1, strs[i].length) + " " ;
  }
 
  return result;	
}

console.log(LetterCapitalize("hello world"));
console.log(LetterCapitalize('i ran there'));
