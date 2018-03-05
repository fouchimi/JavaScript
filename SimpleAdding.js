function SimpleAdding(num) {
  let result = 0;
  for(let i = 1; i <= num; i++) {
    result += i;
  }

  return result;	
}

console.log(SimpleAdding(12));
console.log(SimpleAdding(140));
