fetch("https://fakestoreapi.com/products")
/* .then(response => console.log(response))
.catch((error) => console.log(`error ${error}`))
.finally(() => console.log("Fetch is completed.")); */

.then(response => response.json()) // extract json and returning back from then; needs one more then
.then((json) => console.log(json))
.catch((error) => console.log(`error ${error}`))
.finally(() => console.log("Fetch is completed."));