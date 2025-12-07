// 4. The Fibonacci sequence of numbers is a famous pattern where the next number in the sequence is the sum of the previous 2. e.g. 1, 1, 2, 3, 5, 8, 13, 21, 34, etc.

// a) Write a function printFibonacci() using setInterval that outputs a number in the Fibonacci sequence every second.

function printFibonacci() {
  let a = 0, b = 1;

  const intervalId = setInterval(() => {
    console.log(b);      // Print current Fibonacci number
    const next = a + b;  // Compute next
    a = b;               // Shift a to b
    b = next;            // Shift b to next
  }, 1000);              // Every 1 second
}

// printFibonacci();

// b) Write a new version printFibonacciTimeouts() that uses nested setTimeout calls to do the same thing

function printFibonacciTimeouts() {
  let a = 0, b = 1;

  function nextFib() {
    console.log(b);
    const next = a + b;
    a = b;
    b = next;

    setTimeout(nextFib, 1000); // Schedule next number after 1 second
  }

  nextFib(); // Start printing
}

printFibonacciTimeouts();

// c) Extend one of the above functions to accept a limit argument, which tells it how many numbers to print before stopping.

function printFibonacci(limit) {
  let a = 0, b = 1;
  let count = 0;

  const intervalId = setInterval(() => {
    if (count >= limit) {
      clearInterval(intervalId); // Stop after limit
      return;
    }

    console.log(b);
    const next = a + b;
    a = b;
    b = next;

    count++;
  }, 1000);
}

// Print first 10 Fibonacci numbers
printFibonacci(10);