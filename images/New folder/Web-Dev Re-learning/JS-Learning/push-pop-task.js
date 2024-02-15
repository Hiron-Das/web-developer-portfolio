// adding an element to the begining of an array
var num = [12, 23, 44, 34, 64];
// num.unshift(11);
console.log(num);

// adding element to particular location
num.splice(2, 2, 13, 14);
console.log(num);

// popping an element from first index of an array
//num.shift();
//console.log(num);

// concating an array
var newArray = [].concat(num);
console.log(newArray);