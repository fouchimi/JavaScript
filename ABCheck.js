function ABCheck(str) {
  return str.search(/a...b/gi) > -1;
}

console.log(ABCheck("after badly"));
console.log(ABCheck("Laura sobs"));
