const array = [1, 2, 3, 4, 5];
let sum = 0;

for (let i = 0; i < array.length; i++) {
  sum += array[i];
}

console.log(`The sum of the array is: ${sum}`);

let avg = sum / array.length;
console.log(`The average of the array is: ${avg}`);

if (avg > 2.5) {
  console.log('The average is greater than 2.5');
} else {
  console.log('The average is less than or equal to 2.5');
}
