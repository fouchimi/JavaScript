function LongestWord(sen) {
  let strs = sen.split(" ");
  let maxSum = 0;
  let longestWord = "";
  for(let i = 0; i < strs.length; i++) {
    let currentWord = strs[i].toLowerCase();
    let currentSum = 0;
    for(let j = 0; j < currentWord.length; j++) {
      if(currentWord.charCodeAt(j) >= 97 && currentWord.charCodeAt(j) <= 122) {
        currentSum++;
      }
    }
    if(currentSum > maxSum) {
      maxSum = currentSum;
      longestWord = currentWord;
    }
  }
  return longestWord;
}

console.log(LongestWord("fun&!! time"));
console.log(LongestWord("I love dogs"));
