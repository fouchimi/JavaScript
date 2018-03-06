function DivisionStringified(num1, num2) {
  let k = Math.ceil(num1/num2);
  let currentString = String(k);
  let result = "";
  while (currentString.length > 3) {
    result = "," + currentString.substr(currentString.length-3, currentString.length);
    currentString = currentString.substr(0, currentString.length-3);
  }
  if(currentString.length > 0) result = currentString + result;
  else result = result.substr(1, result.length);
  return result;
}

console.log(DivisionStringified(123456789, 10000));
console.log(DivisionStringified(6874, 67));
