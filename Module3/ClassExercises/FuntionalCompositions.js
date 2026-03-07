function TopFunction(x) {
    return function (y) {
        return x + y;
    };
}

function printName() {
    console.log("Prints a name");
}
function delayPrintLines() {
    setTimeout(()=>console.log("printing..."), 2000);
}


function FunctionCaller(originalFunc){
    console.log(`calling the function ${originalFunc.name}`);
    originalFunc();
}

FunctionCaller(printName); // decorated print name

FunctionCaller(delayPrintLines); // decorated delayPrintLines

// helpful if the code isn't created by you.
// as the developer, decorate the function without changing the actual function 