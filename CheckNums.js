function CheckNums(num1, num2) {
  if(typeof num1 == typeof num2 && num1 === num2) return "-1";
  else if(typeof num1 == typeof num2 && (num2 > num1)) return "true";
  else if(typeof num == typeof num2 && (num2 < num1)) return "false";
  return "false";	  
}

console.log(CheckNums(8, 8));
console.log(CheckNums(10, 15));
console.log(CheckNums(15, 10));	
