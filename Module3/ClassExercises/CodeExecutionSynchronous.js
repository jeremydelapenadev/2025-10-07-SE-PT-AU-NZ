console.log("First");
console.log("Second");

// insert two parameters here for the setTimeout

/*
setTimeout(printThirdLine, 2000);

function printThirdLine () {
    console.log("Third"); //delay by 2 seconds
}

or a faster way...
*/

setTimeout(() => console.log("Third"), 2000);



console.log("Fourth");
console.log("Fifth");
console.log("Sixth");

//

function Sum(a, b) {
    console.log(a + b);
}

setTimeout(Sum, 2000, 10, 20);
// delayed by 2 seconds, then adding parameter a with paramater b

let timerID = setTimeout(Sum, 2000, 10, 20);

// clearTimeout(timerID);
// clears or stops the execution of set timeout function

for (let i = 0; i < 10, i++;) {
    console.log("Processing...");

    if (i == 5) {
        clearInterval(timerID);
        console.log("Processing stopped...");
        break; // use this to exit a loop abruptly
    }
}