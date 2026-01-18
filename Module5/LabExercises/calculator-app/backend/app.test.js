// Exercise6

/*

This unit test will simulate a HTTP request to the GET /add endpoint of our server-side calculator (using Supertest), and expect the response to fulfil several conditions (using Jest).

First, we import the Supertest library and store it in a constant variable (a function) called request. After we also import the express app,
we can then make requests to the app's API endpoints (routes). This allows us to test our routes without having to actually start the app.

*/

const request = require("supertest");
const app = require("./app");

// The describe function groups multiple unit tests together into a test suite, named using the string passed as the first parameter.
describe("Calculator Routes", () => {

  // generate some random numbers to test the calculator
  let number1 = Math.floor(Math.random() * 1_000_000);
  let number2 = Math.floor(Math.random() * 1_000_000);

  // run a unit test for the /add route
  test("GET /calculator/add => sum of numbers", () => {
    return request(app)
      .get(`/calculator/add?num1=${number1}&num2=${number2}`)
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual({
          result: number1 + number2,
        });
      });
  });

  // run a unit test for the /subtract route
  test("GET /calculator/subtract => difference of numbers", () => {
    return request(app)
      .get(`/calculator/subtract?num1=${number1}&num2=${number2}`)
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual({
          result: number1 - number2,
        });
      });
  });

  // run a unit test for the /multiply route
  test("GET /calculator/multiply => product of numbers", () => {
    return request(app)
      .get(`/calculator/multiply?num1=${number1}&num2=${number2}`)
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual({
          result: number1 * number2,
        });
      });
  });

  // run a unit test for the /divide route
  test("GET /calculator/divide => quotient of numbers", () => {
    return request(app)
      .get(`/calculator/divide?num1=${number1}&num2=${number2}`)
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual({
          result: number1 / number2,
        });
      });
  });
});

// run supertest using `npm test`

// For more information, refer to this website: https://www.npmjs.com/package/supertest