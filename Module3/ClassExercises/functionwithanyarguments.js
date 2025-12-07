// not yet down with this one!!!

function Sum(a, b) {
  return arguments[0] + arguments[1] + arguments[2];
}

console.log(Sum(4, 5, 6));
console.log(Sum("sds", 5, 6));

//

/* function printGreeting (name){

}

printGreeting("Undecorated");
function Sum(a,b) {
    return a + b;
}

function loggingTimingDecorator(originalFunction) {
  // same decorator function as before
  return function () {
    // BUT now the returned function doesn't name its arguments from here
    console.time("Function timer");
    console.log(`\nExecuting function ...`);
    //const result = originalFunction(name); // WON'T work as name is now undefined
    //const result = originalFunction.call(this, ...arguments) // WILL work, no matter how many args
    const result = originalFunction.apply(this, arguments); // and so does this - try out both
    console.log(arguments); // [Arguments] { '0': 8 }
    console.timeEnd("Function timer"); // stop the timer
    return result; // return the result of running the original function
  };
}

let decoratedPrintGreeting = loggingTimingDecorator(printGreeting);
decoratedPrintingGreeting("Jeremy")
let sumDecorated = loggingTimingDecorator(Sum);
    console.log(sumDecorated(2,3)); */

//

let worker = {
  getMultiplier() {
    return Math.floor(Math.random() * 1_000_000); // large random number
  },

  slow(x) {
    let random = 0,
      goal = x * this.getMultiplier(); // needs context to work
    for (let i = 0; i < goal; i++) random++;
    console.log(`worker.slow(${x}): randomly generated goal is ${goal}`);
    return random; // return large number
  },
};

console.log.worker.(getMultiplier());
console.log.worker.(slow(4));

let decoratedSlowmethod = cachingDecorator(worker.slow.bind(worker));

decoratedSlowmethod(4);