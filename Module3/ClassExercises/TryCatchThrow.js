function checkJson(json) {
  // checks json argument for validity and ensures a name property
  try {
    const user = JSON.parse(json); // parse string into object
    if (!user.name) {
      throw new SyntaxError("Incomplete data: no name"); // we can throw our own custom errors
    }
    return true; // returns true (valid json) if no error was thrown above
  } catch (err) {
    if (err instanceof SyntaxError) {
      // once caught, we can do specific things based on error type
      console.log("JSON Error: " + err.message);
    } else {
        console.log(err);
    }
  } finally {
    console.log("finished checkJSON code execution");
}
return false //returns false if any error orrcured
}

let jsonToCheck = {
        location: "Australia",
        university: "XYZ university"
    }

    checkJson(JSON.stringify(jsonToCheck));