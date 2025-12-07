const promise1 = new Promise((resolve, reject) => {
  let number = Math.floor(Math.random() * 50);
  console.log(number);
  if (number % 2) resolve(true);
  else reject(true);
})
.then((result) => console.log("Successful outcome")) // for positive outcome / success
.catch((result)=> console.log("Failure or unsuccesful"))  // failure
.finally(() => console.log("Promise fulfilled"));

// example promise. settles after 250ms with success or failure depending on random number
const promise = new Promise((resolve, reject) => { // resolve/reject are callback functions
if (Math.random() > 0.5) setTimeout( () => resolve('Random number ok'), 250 ) // success
else setTimeout( () => reject('Random number too low'), 250 ) // failure
})

promise // consume the promise by responding to outcomes when they happen
.then( (result) => console.log('Success! ' + result ) ) // prints resolve msg
.catch( (error) => console.log('Error! ' + error ) ) // prints reject msg
.finally( () => console.log('Wait is over, promise has settled.') ) // always prints