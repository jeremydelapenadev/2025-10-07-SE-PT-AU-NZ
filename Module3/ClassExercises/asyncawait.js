console.log("sync1");
console.log("sync2");
console.log("sync3");
let promise1 = new Promise((resolve) =>
  setTimeout(() => resolve(10), 4000)
).then((result) => console.log(result));

await promise1;

console.log("sync4");
console.log("sync5");
console.log("sync6");
console.log("sync7");
console.log("sync8");
