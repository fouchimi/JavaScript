function Palindrome(str) {
  str = str.replace(/\s/gi, '');
  console.log(str);	
  for(let i= 0, j = str.length-1; i < j; i++, j--) {
    if(str.charAt(i) != str.charAt(j)) return "false";
  }
  return "true";	
}

console.log(Palindrome("never odd or even"));
console.log(Palindrome("eye"));
