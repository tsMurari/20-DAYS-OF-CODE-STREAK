//The code defines a function called calculateSum that takes two parameters,
//a and b,and calculates their sum.The function then logs the sum to the console and returns it.
//The code then defines two variables,num1 and num2,and assigns them the values of 5 and 10 respectively.
//Finally, it calls the calculateSum function,passing in num1 and num2 as arguments,and assigns the return value to the variable total,
//which is then also logged to the console.
function calculateSum(a, b) {
    let sum = a + b;
    console.log("The sum is: " + sum);
    return sum;
  }
  
  let num1 = 5;
  let num2 = 10;
  let total = calculateSum(num1, num2);
  console.log("Total: " + total);
  