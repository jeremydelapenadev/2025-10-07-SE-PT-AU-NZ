let promise1 = new Promise((resolve, reject) => {
    resolve(true);
});

let promise2 = new Promise((resolve,reject) => {
    reject(false);
});

let promise3 = new Promise((resolve,reject)=> {
    setTimeout(()=>resolve(true),2000)
});

let promise4 = new Promise((resolve,reject)=>{
    setTimeout(() => resolve(false), 1000)
});

Promise.all([promise1, promise2]).then((outcomes) => {
    console.log("Promise all");
    console.log(outcomes);
}) // be mindful of the semi colon

.catch((result)=>{ 
    console.log("Promise all");
    console.log(result);
})

Promise.allSettled([promise1, promise2])
.then((outcomes)=>{
    console.log("promise all settled");
    console.log(outcomes);
})
.catch((result) => {
    console.log("promise all settled");
    console.log(result);
});

Promise.race([promise3, promise4])
.then((outcomes)=>{
    console.log("promise race")
    console.log(outcomes)
})
.catch((result)=>{
    console.log(results)
});

Promise.any([promise1, promise2, promise3, promise4])
.then((outcomes) =>{
    console.log("Promise any")
    console.log(outcomes)
})
.catch((result) => {
    console.log("Promise any");
    console.log(result);
});

Promise.any([promise2, promise4])
.then((outcomes) =>{
    console.log("Promise any");
    console.log(outcomes);
})
.catch((result) => {
    console.log("Promise any");
    console.log(result);
});