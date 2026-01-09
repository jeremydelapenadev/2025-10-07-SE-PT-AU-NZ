const request = require("supertest"); // mock the HTTP request

const app = require("./app");

describe("Calculator Routes", () => {
  let num1 = Math.floor(Math.random() * 1_000_000);
  let num2 = Math.floor(Math.random() * 1_000_000);

  test("Get /calculate/add => sum of numbers", () => {
    return request(app)
      .get(`/calculate/add?num1=${num1}&num2=${num2}`)
      .expect("Content-Type", /json/)
      .expect(200)

      .then((response) => {
        expect(response.body).toEqual({
          res: num1 + num2,
        });
      });
  });
  test("Get /calculate/subtract => subtract of numbers", () => {
    return request(app)
      .get(`/calculate/subtract?num1=${num1}&num2=${num2}`)
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual({
          res: num1 - num2,
        });
      });
  });
});
