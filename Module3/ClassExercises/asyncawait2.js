let waitForPromise = async () => {
  try {
    let promise1 = new Promise((resolve) =>
      setTimeout(() => resolve(10), 4000)
    );

    let result = await promise1;
    console.log(`promise result ${result}`);
  } catch (error) {
    console.log(error);
  }
};

waitForPromise(); //call the function

// what if rejected...

let waitForPromise2 = async () => {
  try {
    let promise2 = new Promise((resolve, reject) =>
      setTimeout(() => reject(10), 4000)
    );

    let result2 = await promise2;
    console.log(`promise result ${result2}`);
  } catch (error) {
    console.log("Promise rejected and result below");
    console.log(error);
  }
};

waitForPromise2(); //call the function