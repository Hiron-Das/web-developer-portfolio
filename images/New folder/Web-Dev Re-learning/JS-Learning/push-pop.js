// push method to insert an element to the end of an array
var num = [23, 34, 54, 45];
console.log(num);
num.push(89);
console.log(num);

var books = ["Java", "Python", "C++"];
console.log(books);
books.push("Javascript", "ReactJs");
console.log(books);

// pop method to pop or delete one element from an array
books.pop(books[4]);
console.log(books);
books.pop("Javascript");
console.log(books);

console.log(num);
var popped = num.pop();
console.log(popped);