function TimeConvert(num) {
 if(typeof num == "number" && num < 60) return "0:" + num;
 else {
    let count = 0;	 
    while(num > 60) {
      num -= 60;
      count++;	    
    }
    return count + ":" + num;	 
 }
}

console.log(TimeConvert(126));
