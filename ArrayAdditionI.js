function ArrayAdditionI(arr) {
 arr = arr.sort(sortNumber);
 let max = Number(arr.splice(arr.indexOf(arr[arr.length-1]), 1));	
 for(let subset of subsets(arr)) {
    let sum = 0;	 
    for(let i = 0; i < subset.length; i++) {
      sum += subset[i]; 	    
    }	 
    if(sum === max) return "true";	 
 }
 return "false";	
}

function* subsets(array, offset = 0) {
  while(offset < array.length) {
    let first = array[offset++];
    for(let subset of subsets(array, offset)) {
       subset.push(first);
       yield subset;	    
    }	  
  }
  yield [];	
}

function sortNumber(a, b) {
 return a-b;
}

console.log(ArrayAdditionI([5, 7, 16, 1, 2]));
console.log(ArrayAdditionI([3, 5, -1, 8, 12]));
console.log(ArrayAdditionI([4, 6, 23, 10, 1, 3]));
