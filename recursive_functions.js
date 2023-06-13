// sigma(n) - returns (int) n + n - 1 + n - 2 ...  + 1
// sigma(3) - 6
// sigma(4) - 10

function sigma(n) {
    if (n <= 1) {
        return 1;
    }
    else {
        return (n + sigma(n - 1));
    }
}

console.log(sigma(3));
console.log(sigma(4));
console.log(sigma(5));

  // factorial(n) - return n!
  // factorial(5) - 5! - 120
  // factorial(6) - 6! - 720
  // factorial(100) - 100! - ~9.33 * 10^157

function factorial(n) {
    if (n <= 1) {
        return 1;
    }
    else {
        return (n * factorial(n - 1));
    }
}

console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));

  // fibonacci(n) - returns the nth term of the Fibonacci sequence
  // f(n) = f(n - 1) + f(n - 2)
  // fibonacci(1) - returns 1
  // fibonacci(2) - returns 1
  // fibonacci(3) - returns 2
  // fibonacci(9) - returns 34

function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    else {
        return fibonacci(n-1) + fibonacci(n-2);
    }
}

console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(9));