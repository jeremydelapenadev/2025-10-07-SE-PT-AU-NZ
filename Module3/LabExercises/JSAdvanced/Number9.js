// 9. We can delay execution of a function using setTimeout, where we need to provide both the callback function and the delay after which it should execute.

/*
Given script:

function randomDelay() {
// your code
}
randomDelay().then(() => console.log('There appears to have been a delay.'));
*/

/* a) Create a promise-based alternative randomDelay() that delays execution for a random amount of time (between 1 and 20 seconds) and
returns a promise we can use via .then(), as in the starter code below. */

/* function randomDelay() {
  const delay = Math.floor(Math.random() * 20) + 1; // 1 to 20 seconds
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(delay); // resolve with the delay value
    }, delay * 1000);
  });
}

// Test
randomDelay().then(delay => console.log(`There appears to have been a delay of ${delay} seconds.`));

// b) If the random delay is even, consider this a successful delay and resolve the promise, and if the random number is odd, consider this a failure and reject it

function randomDelay() {
  const delay = Math.floor(Math.random() * 20) + 1; // 1–20 seconds
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (delay % 2 === 0) {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay * 1000);
  });
}

// c) Update the testing code to catch rejected promises and print a different message
// d) Try to update the then and catch messages to include the random delay value

randomDelay()
  .then(delay => console.log(`Success! Delay was ${delay} seconds (even).`))
  .catch(delay => console.log(`Failure! Delay was ${delay} seconds (odd).`)); */

////////

// Full script

function randomDelay() {
  const delay = Math.floor(Math.random() * 20) + 1; // 1–20 seconds
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (delay % 2 === 0) {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay * 1000);
  });
}

// Test
randomDelay()
  .then(delay => console.log(`Success! Delay was ${delay} seconds (even).`))
  .catch(delay => console.log(`Failure! Delay was ${delay} seconds (odd).`));

/* Behaviour:

Randomly delays 1–20 seconds.

Even delay → prints success.

Odd delay → prints failure.

The delay value is included in the message.

*/