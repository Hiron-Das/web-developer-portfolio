var num = [12, 34, 23, 54, 65];
num[3] = 50;
console.log(num);
var element = 45;
num[1] = element;
console.log(num);
num.push(100);
console.log(num);
num.pop();
console.log(num);
num.unshift(11);
console.log(num);
num.shift();
console.log(num);
num.splice(1, 0, 30);
console.log(num);