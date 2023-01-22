function fibonacci() {
    let num = parseInt(prompt("Please enter a number:"));
    let fib = [0,1];
    while (fib.length < num) {
        let next = fib[fib.length - 1] + fib[fib.length - 2];
        fib.push(next);
    }
    return fib.slice(0,num).join(",");
}
let result = fibonacci()
console.log("Fibonacci sequence up to " + result + " : " + result);
