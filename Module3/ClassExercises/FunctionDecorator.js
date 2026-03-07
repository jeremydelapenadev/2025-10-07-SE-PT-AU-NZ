function printGreeting(name) {
    // simple undecorated function
    console.log("Hello, " + name);
}
printGreeting("Undecorated");

function loggingTimingDecorator(originalFunction) {
    // decorator take a function as parameter
    return function (name) {
        // and returns that function with extra bits - timing / logging
        console.time("Function timer"); // start a timer
        console.log(`\nExecuting function ...`); // log a message
        const result = originalFunction(name) // execute the original function and store result
        console.timeEnd("Function timer"); // stop the timer
        return result; // return the result of running the original function
    }
}

let decoratedPrintGreeting = loggingTimingDecorator(printGreeting);

decoratedPrintGreeting("Decorated");

//

function slow(x) {
    let random = 0, goal = x * this.getMultiplier(); // needs context to work
    for (let i = 0; i < goal; i++) random++;
    console.log(`worker.slow(${x}): randomly generated goal is ${goal}`);
    return random; // return large number
}

// and

function cachingDecorator(origFunction) { // decorator takes a function as parameter
    const cache = new Map(); // can also include outer environment variables via a closure
    return function (x) { // decorator returns same function with extra bits - caching
        if (cache.has(x)) { // if the key exists in the cache,
            console.log('returned cached value for ' + x); return cache.get(x); // read and return the result from it
        }
        let result = origFunction(x) // otherwise, call the original function and store the result
        cache.set(x, result); // then cache (remember) the result for next time
        return result;
    };
}

let decoratedCachingFunction = cachingDecorator(slow); // decorates the slow function
let loggingdecoratedandCachingFunction = loggingTimingDecorator(decoratedCachingFunction);
console.log(decoratedCachingFunction(4));
console.log(decoratedCachingFunction(4));