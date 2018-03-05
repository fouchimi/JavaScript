function ArithGeo(arr) { 
  let first = testArithmetic(arr);
  if(first === "Arithmetic") return first;
  else {
    let second = testGeometric(arr);
    return second;	  
  }		
}

function testArithmetic(arr) {
  let k = 0;	
  let prev = arr[1] - arr[0];	
  for(let i = 1; i <= arr.length-1; i++) {
    k = arr[i]-arr[i-1];	
    if(prev === k) {
      k = prev;	    
    }else return "-1"; 	  
  }
  return "Arithmetic";	
}


function testGeometric(arr) {
  let k = 0;	
  let prev = arr[1]/arr[0];	
  for(let i = 1; i <= arr.length-1; i++) {
    k = arr[i]/arr[i-1];	
    if(prev === k) {
      k = prev;	    
    }else return "-1"; 	  
  }
  return "Geometric";	
}

console.log(ArithGeo([5, 10, 15]));
console.log(ArithGeo([2, 4, 16, 24]));
console.log(ArithGeo([2, 6, 18, 54]));
console.log(ArithGeo([2, 4, 6, 8]));
