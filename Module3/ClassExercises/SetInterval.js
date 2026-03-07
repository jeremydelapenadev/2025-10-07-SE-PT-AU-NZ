let timerID = setInterval(() => console.log("Processing..."), 1000);

setTimeout(() => clearInterval(timerID), 10 * 1000); // will stop after 10 seconds

// do this or else it will eat your memory