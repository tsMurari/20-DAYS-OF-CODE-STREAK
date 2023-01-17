function findLargest(numbers) {
    let largest = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > largest) {
            largest = numbers[i];
        }
    }
    return largest;
}

function findSmallest(numbers) {
    let smallest = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < smallest) {
            smallest = numbers[i];
        }
    }
    return smallest;
}

function findAverage(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum / numbers.length;
}

let numbers = [3, 5, 7, 2, 8, 10, 11, 65, 72, 81, 99, 100, 150];
console.log("Largest number is: " + findLargest(numbers));
console.log("Smallest number is: " + findSmallest(numbers));
console.log("Average is: " + findAverage(numbers));
