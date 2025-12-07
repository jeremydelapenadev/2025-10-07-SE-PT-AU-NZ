// 2. The following delayMsg function is intended to be used to delay printing a message until some time has passed.

function delayMsg(msg)
{
console.log(`This message will be printed after a delay: ${msg}`)
}
setTimeout(delayMsg, 100, '#1: Delayed by 100ms');
setTimeout(delayMsg, 20, '#2: Delayed by 20ms');
setTimeout(delayMsg, 0, '#3: Delayed by 0ms');
delayMsg('#4: Not delayed at all')


// a) What order will the four tests below print in? Why?

/* delayMsg('#4: Not delayed at all') → prints immediately, because it's a direct function call.

setTimeout(delayMsg, 0, '#3: Delayed by 0ms') → queued in the event loop, runs after the current call stack is empty. Even 0ms delay is not truly immediate.

setTimeout(delayMsg, 20, '#2: Delayed by 20ms') → runs after ~20ms.

setTimeout(delayMsg, 100, '#1: Delayed by 100ms') → runs after ~100ms.

✅ Print order:

#4: Not delayed at all
#3: Delayed by 0ms
#2: Delayed by 20ms
#1: Delayed by 100ms

Why: JavaScript uses an event loop. setTimeout callbacks are placed in the task queue after the specified delay, so even 0ms waits until the call stack is empty. */


// b) Rewrite delayMsg as an arrow function

const delayMsg = msg => console.log(`This message will be printed after a delay: ${msg}`);

// c) Add a fifth test which uses a large delay time (greater than 10 seconds)

const timeoutId = setTimeout(delayMsg, 12000, '#5: Delayed by 12 seconds');

// d) Use clearTimeout to prevent the fifth test from printing at all.

clearTimeout(timeoutId); // cancels the #5 message

