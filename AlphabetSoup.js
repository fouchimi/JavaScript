function AlphabetSoup(str) {
 let strs = str.split("");
 strs.sort();
 let result = "";
 for(let i = 0; i < strs.length; i++) {
    result += strs[i];
 }	
 return result;	
}

console.log(AlphabetSoup("coderbyte"));
console.log(AlphabetSoup("hooplah"));
