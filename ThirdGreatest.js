function ThirdGreatest(strArr) {
  let values = [];
  for(let i = 0; i < strArr.length; i++) {
    values.push(strArr[i].length);
  }
  values = values.sort((a, b) => a-b);
  let limit  = 2, i = 1;
  let thirdLength = 0;
  while(limit >= 0) {
    thirdLength = values[values.length-i];
    limit--;
    i++;
  }
  for(let i = 0; i < strArr.length; i++) {
    if(strArr[i].length === thirdLength) return strArr[i];
  }
  return "";
}

console.log(ThirdGreatest(["coder", "byte", "code"]));
console.log(ThirdGreatest(["abc", "defg", "z", "hijk"]));
