let fruits = ["apple", "banana", "orange"];
console.log("Original array: " + fruits);

let newFruits = fruits.slice(1);
console.log("New array: " + newFruits);

let index = fruits.indexOf("banana");
console.log("Index of 'banana': " + index);

fruits.push("mango");
console.log("Updated array: " + fruits);

fruits.pop();
console.log("New array after pop: " + fruits);
