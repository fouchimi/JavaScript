function countLetters(strs) {
  let myMap = new Map();
  for(let i = 0; i < strs.length; i++) {
    if(!myMap.has(strs.charAt(i))) {
      myMap.set(strs.charAt(i), [strs.charAt(i)]);
    }else {
      let values = myMap.get(strs.charAt(i));
      values.push(strs.charAt(i));
      myMap.set(strs.charAt(i), values);
    }
  }

  for(let [key, value] of myMap) {
    console.log("Key: " + key + " Value size: " + value.length);
  }
}

console.log(countLetters("abacdda"));
