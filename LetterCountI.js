function LetterCountI(str) {
  let strs = str.split(" ");
  for(let i = 0; i < strs.length; i++) {
    const result = checkDuplicateLetters(strs[i]);
    if(result === "Found") return strs[i];
  }
  return -1;
}

function checkDuplicateLetters(str) {
  console.log(str);
  let myMap = new Map();
  for(let i = 0; i < str.length; i++) {
    if(!myMap.has(str.charAt(i))) {
      console.log("Char: " + str.charAt(i));
      myMap.set(str.charAt(i), [str.charAt(i)]);
    }else return "Found";
  }
  return "Not Found";
}

console.log(LetterCountI("Hello apple pie"));
console.log(LetterCountI("No words"));
