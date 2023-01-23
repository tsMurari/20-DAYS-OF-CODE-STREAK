var num = prompt("Enter a number:");
num = parseInt(num);
var prime = true;

if (num <= 1) {
  console.log(num + " is not a prime number.");
} else {
  for (var i = 2; i <= Math.sqrt(num); i++) {
    if (num % i == 0) {
      prime = false;
      break;
    }
  }
  
  if (prime) {
    console.log(num + " is a prime number.");
  } else {
    console.log(num + " is not a prime number.");
  }
}
