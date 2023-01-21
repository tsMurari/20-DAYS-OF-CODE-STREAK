function smallestCommonMultiple() {
    let num1 = parseInt(prompt("Please enter the first number:"));
    let num2 = parseInt(prompt("Please enter the second number:"));
    let multiple = 1;
    while(!(multiple % num1 === 0 && multiple % num2 === 0)){
        multiple++;
    }
    return multiple;
}
console.log("The smallest common multiple is: " + smallestCommonMultiple());

