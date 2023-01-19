function secondLargest(nums) {
    if (nums.length < 2) {
        return "Array must have at least 2 numbers";
    }
    let largest = nums[0];
    let secondLargest = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > largest) {
            secondLargest = largest;
            largest = nums[i];
        } else if (nums[i] > secondLargest) {
            secondLargest = nums[i];
        }
    }
    return secondLargest;
}

console.log(secondLargest([1, 2, 3, 4, 5])); //4
console.log(secondLargest([5, 4, 3, 2, 1])); //4
console.log(secondLargest([-1, -2, -3, -4, -5])); //-2
console.log(secondLargest([1])); //"Array must have at least 2 numbers"
