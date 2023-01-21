function smallestCommonMultiple() {
    let num1 = parseInt(prompt("Please enter the first number:"));
    let num2 = parseInt(prompt("Please enter the second number:"));
    let multiple = 0;
    let i = 1;
    while (multiple === 0) {
        let multiple1 = num1 * i;
        let multiple2 = num2 * i;
        if (multiple1 === multiple2) {
            multiple = multiple1;
        }
        i++;
    }
    return multiple;
}
console.log("The smallest common multiple is: " + smallestCommonMultiple());
