function VowelCount(str) {
 str = str.toLowerCase();	
 const vowels = ['a', 'e', 'i', 'o', 'u'];
 let count = 0;
 for(let i = 0; i < str.length; i++) {
   if(vowels.includes(String(str.charAt(i)))) count++;
 }	
 return count; 	
}

console.log(VowelCount("hello"));
console.log(VowelCount("coderbyte"));
