function LetterChanges(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];	
  let result = '';
  let ch = '';	
  for(let i=0; i < str.length; i++) {
      let code = str.charCodeAt(i);
      if((code >= 65 && code <= 90) || (code >= 97 && code <= 122))  { 	  
	  ch = String(String.fromCharCode((code +1)));
          result += (vowels.includes(ch)) ? ch.toUpperCase() : ch;	  
      }
      else result += str.charAt(i);
    }
  return result;	
}

console.log(LetterChanges("Argument goes here"));
