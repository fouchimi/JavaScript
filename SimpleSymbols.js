function SimpleSymbols(str) {
 for(let i = 0; i < str.length; i++) {
   if((str.charCodeAt(0) >= 65 && str.charCodeAt(0) <= 90) || 
      (str.charCodeAt(0) >= 97 && str.charCodeAt(0) <= 122) || 
      (str.charCodeAt(str.length-1) >= 65 &&  str.charCodeAt(str.length-1) <= 90) || 
      (str.charCodeAt(str.length-1) >= 97 &&  str.charCodeAt(str.length-1) <= 122)) return false;	 
   else if((str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) ||  (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122 )) {
        if(str.charAt(i-1) !== String('+').charAt(0) || str.charAt(i+1) !== String('+').charAt(0)) return false;   
   }	 
 }
   return true;
}

console.log(SimpleSymbols('+d+=3=+s+'));
console.log(SimpleSymbols('f++d+'));
console.log(SimpleSymbols('+d===+a+'));
