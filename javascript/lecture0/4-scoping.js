thisIsHoisted();
// thisIsNotHoisted();

const thisIsAConst = 50;
thisIsAlsoAVariable = "hello";


// thisIsAConst++ // error 1
const constObj = {};

constObj.a = 'a';

let thisIsALet = 51;
thisIsALet = 50;

// let thisIsALet = 51; // Error

console.log(thisIsALet);

var thisIsAVar = 50;
thisIsAVar = 51;
var thisIsAVar = 'new value!';

console.log(thisIsAVar);

function thisIsHoisted() {
  console.log('this is as function declare a the bottom of the file');
}

// Will throw a reference error when invoke on top of the file
const thisConstIsNotHoisted = function() {
  console.log('should this be hoisted?');
}

// Will throw a reference error when invoked on top of the file
let thisLetIsNotHoisted = function() {
  console.log('should this be hoisted?');
}

// Will throw a type error when invoked and will be hoisted to the top of the fi
// file
var thisVarIsNotHoisted = function() {
  console.log('should this be hoisted?');
}


