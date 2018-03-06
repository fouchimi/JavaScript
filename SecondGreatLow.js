function SecondGreatLow(arr) {
  arr = arr.sort(sortNumber);
  console.log(arr);
  let min = arr[0], max = arr[arr.length-1];
  let firstFlag = true, secondFlag = true;
  for(let i = 0, j = arr.length-1; i < arr.length && j >=0; i++, j--) {
    if(arr[i+1] > min && firstFlag) {
      min = arr[i+1];
      firstFlag = false;
    }
    if(arr[j-1] < max && secondFlag){
      max = arr[j-1];
      secondFlag = false;
    }
  }

  return String(min) + " " + String(max);
}

function sortNumber(a, b) {
  return a-b;
}

console.log(SecondGreatLow([78, 90, 100, 1, 2]));
