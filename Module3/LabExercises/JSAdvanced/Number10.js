/* 10.Fetch is a browser-based function to send a request and receive a response from a server, which uses promises to handle the asynchronous response.
The below fetchURLData uses fetch to check the response for a successful status code, and returns a promise containing the JSON sent by the remote server if successful
or an error if it failed. (To run this code in a node.js environment, follow the instructions in the comments before the function.) */

// run 'npm init' and accept all the defaults
// run 'npm install node-fetch'
// run 'npm pkg set type=module'

/*

import fetch from 'node-fetch'
globalThis.fetch = fetch
function fetchURLData(url) {
let fetchPromise = fetch(url).then(response => {
if (response.status === 200) {
return response.json();
} else {
throw new Error(`Request failed with status ${response.status}`);
}
});
return fetchPromise;
}

fetchURLData('https://jsonplaceholder.typicode.com/todos/1')
.then(data => console.log(data))
.catch(error => console.error(error.message));

*/

// a) Write a new version of this function using async/await

import fetch from 'node-fetch';
globalThis.fetch = fetch;

async function fetchURLDataAsync(url) {
  try {
    const response = await fetch(url);
    if (response.status === 200) {
      const data = await response.json();
      return data;
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  } catch (error) {
    throw error; // propagate error
  }
}

// Test
fetchURLDataAsync('https://jsonplaceholder.typicode.com/todos/1')
  .then(data => console.log('Async/Await success:', data))
  .catch(error => console.error('Async/Await error:', error.message));

// b) Test both functions with valid and invalid URLs

// Valid URL
fetchURLDataAsync('https://jsonplaceholder.typicode.com/todos/1')
  .then(data => console.log('Valid URL:', data))
  .catch(err => console.error(err.message));

// Invalid URL
fetchURLDataAsync('https://jsonplaceholder.typicode.com/invalid-url')
  .then(data => console.log('Invalid URL:', data))
  .catch(err => console.error('Caught error:', err.message));

// c) (Extension) Extend your new function to accept an array of URLs and fetch all of them, using Promise.all to combine the results.

async function fetchMultipleURLs(urls) {
  try {
    const fetchPromises = urls.map(url => fetchURLDataAsync(url)); // array of promises
    const results = await Promise.all(fetchPromises); // wait for all
    return results;
  } catch (error) {
    throw error; // propagate any error
  }
}

// Test
const urls = [
  'https://jsonplaceholder.typicode.com/todos/1',
  'https://jsonplaceholder.typicode.com/todos/2',
  'https://jsonplaceholder.typicode.com/todos/3'
];

fetchMultipleURLs(urls)
  .then(results => console.log('All results:', results))
  .catch(error => console.error('Error fetching multiple URLs:', error.message));