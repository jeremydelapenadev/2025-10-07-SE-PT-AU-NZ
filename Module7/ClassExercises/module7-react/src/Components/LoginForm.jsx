import { useState } from "react";
import { useFormInput } from "../Hooks/useFormInput";
import { useContext } from "react";
import { userContext } from "../Context/UserProvider";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const navigate = useNavigate(); // <-- get navigate function
  const [result, setResult] = useState("");

  const [emailInputProps, resetEmail] = useFormInput("");
  const [passInputProps, resetPassword] = useFormInput("");

  // STEP 3: Use the Context.
  const { currentUser, handleUpdateUser } = useContext(userContext);
  /* function FormSubmitted() {
    alert(`Email submitted: ${email}\nPassword submitted: ${password}`);
    } */

  function FormSubmitted() {
    if (emailInputProps.length < 5)
      setResult("Email cannot be less than 5 characters");
    else if (passInputProps.length < 4)
      setResult("Password cannot be less than 4 characters");
    else {
      /* setEmail("");
      setPassword(""); */
      resetEmail("");
      resetPassword("");

      handleUpdateUser(emailInputProps.value); // store the user information in the context

      // <-- NEW: Immediately redirect to dashboard
      navigate("/dash");
      
      setResult("User logged in successfully.");
    }
  }

  function logout() {
    handleUpdateUser({}); // pass empty data to the user that will log out the user
    setResult("");
  }

  return (
    <>
      {currentUser?.username ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <>
          <div>
            <label>
              Email Address:
              <input {...emailInputProps} />
            </label>
          </div>

          <div>
            <label>
              Password:
              <input type="password" {...passInputProps} />
            </label>
          </div>
          <div>
            <button onClick={FormSubmitted}>Submit</button>
          </div>
          <div>{result}</div>
        </>
      )}
    </>
  );
}

export default LoginForm;
