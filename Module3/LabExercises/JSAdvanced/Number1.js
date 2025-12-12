// 1. makeCounter below is a decorator function which creates and returns a function that increments a counter.

/*
function makeCounter() {
  let currentCount = 0;
  return function () {
    currentCount++;
    console.log(currentCount);
    return currentCount;
  };
}
*/

// a) Create a second counter counter2 using the makeCounter function and test to see if it remains independent to counter1
// b) Modify makeCounter so that it takes an argument startFrom specifying where the counter starts from (instead of always starting from 0)
// c) Modify makeCounter to take another argument incrementBy, which specifies how much each call to counter() should increase the counter value by.

// startFrom (default 0) – where the counter starts
// incrementBy (default 1) – how much it increases each time

function makeCounter(startFrom = 0, incrementBy = 1) {
  let currentCount = startFrom;
  return function () {
    currentCount += incrementBy;
    console.log(currentCount);
    return currentCount;
  };
}

const counter1 = makeCounter(5, 2);   // starts at 5, increments by 2
const counter2 = makeCounter(100, 10); // starts at 100, increments by 10

counter1(); // 7
counter1(); // 9

counter2(); // 110
counter2(); // 120

counter1(); // 11 (still independent)