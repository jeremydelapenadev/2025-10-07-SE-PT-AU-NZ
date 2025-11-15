// 3. Which of the following console.log messages will print? Why?

if (0) console.log('#1 zero is true') // this one did not print because the 0 value is interpreted as false.
if ("0") console.log('#2 zero is true') // PRINTED -- non-empty strings are interpreted as true.
if (null) console.log('null is true') // this one did not print because the null value is empty and also null is interpreted by JavaScript as false.
if (-1) console.log('negative is true') // PRINTED -- non-zero number (negative) is interpreted as true.
if (1) console.log('positive is true') // PRINTED -- non-zero number (positive) is interpreted as true.