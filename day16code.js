// 1. Declare a class to create a simple calculator
class Calculator {
    // 2. Create a method to add two numbers
    add(a, b) {
      return a + b;
    }
    // 3. Create a method to subtract two numbers
    subtract(a, b) {
      return a - b;
    }
    // 4. Create a method to multiply two numbers
    multiply(a, b) {
      return a * b;
    }
    // 5. Create a method to divide two numbers
    divide(a, b) {
      return a / b;
    }
  }
  
  // 6. Create an instance of the Calculator class
  let calc = new Calculator();
  
  // 7. Use the add method to add two numbers
  console.log(calc.add(5, 10));
  
  // 8. Use the subtract method to subtract two numbers
  console.log(calc.subtract(10, 5));
  
  // 9. Use the multiply method to multiply two numbers
  console.log(calc.multiply(5, 10));
  
  // 10. Use the divide method to divide two numbers
  console.log(calc.divide(10, 5));
  
  // 11. Declare a class to create a simple banking application
  class Bank {
    // 12. Create a constructor to initialize the account balance
    constructor(balance) {
      this.balance = balance;
    }
    // 13. Create a method to deposit money
    deposit(amount) {
      this.balance += amount;
      console.log(`Deposit of ${amount} successful. Current balance: ${this.balance}`);
    }
    // 14. Create a method to withdraw money
    withdraw(amount) {
      if (amount > this.balance) {
        console.log("Insufficient funds.");
      } else {
        this.balance -= amount;
        console.log(`Withdrawal of ${amount} successful. Current balance: ${this.balance}`);
      }
    }
    // 15. Create a method to check the account balance
    checkBalance() {
      console.log(`Current balance: ${this.balance}`);
    }
  }
  
  // 16. Create an instance of the Bank class
  let savingsAccount = new Bank(1000);
  
  // 17. Use the deposit method to deposit money
  savingsAccount.deposit(500);
  
  // 18. Use the withdraw method to withdraw money
  savingsAccount.withdraw(200);
  
  // 19. Use the checkBalance method to check the account balance
  savingsAccount.checkBalance();
  
  // 20. Use try-catch block to handle exceptions
  try {
    savingsAccount.withdraw(2000);
  } catch (error) {
    console.log("Error: " + error.message);
  }
  