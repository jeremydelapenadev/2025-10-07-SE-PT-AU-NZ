let start = 10;
new Promise((resolve) => setTimeout(() => resolve(start), start * 10))
  .then((result) => {
    // promise handler function inside .then()
    console.log(result);
    let next = result + start;
    return new Promise((resolve) => setTimeout(() => resolve(next), next * 10));
  })
  .then((result) => {
    // can explicitly return new promises
    console.log(result);
    let next = result + start;
    return new Promise((resolve) => setTimeout(() => resolve(next), next * 10));
  })
  .then((result) => {
    // which use the results of previously resolved promises in the chain
    console.log(result);
    let next = result + start;
    return new Promise((resolve) => setTimeout(() => resolve(next), next * 10));
  });
// prints 10, 20, 30, but with 100, 200 and 300ms delays in between
