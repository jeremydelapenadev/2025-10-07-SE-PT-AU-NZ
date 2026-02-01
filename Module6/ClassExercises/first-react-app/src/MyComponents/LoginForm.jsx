import { useState } from "react";
import { useFormInput } from "../Hooks/useFormInput";
import { useContext } from "react";
import { userContext } from "./UserProvider";
import { MyThemeContext } from "./MyThemeProvider";
import { themes } from "./MyThemeProvider";

function LoginForm() {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [result, setResult] = useState("");

  const [emailInputProps, resetEmail] = useFormInput("");
  const [passInputProps, resetPassword] = useFormInput("");

  // STEP 3: Use the Context.
  const { currentUser, handleUpdateUser } = useContext(userContext);
  const { theme, setTheme, darkMode } = useContext(MyThemeContext)
  /* function FormSubmitted() {
    alert(`Email submitted: ${email}\nPassword submitted: ${password}`);
    } */

  function FormSubmitted() {
    if (emailInputProps.length < 5) setResult("Email cannot be less than 5 characters");
    else if (passInputProps.length < 4)
      setResult("Password cannot be less than 4 characters");
    else {
      /* setEmail("");
      setPassword(""); */
      resetEmail("");
      resetPassword("");

      handleUpdateUser(emailInputProps.value); // store the user information in the context

      setResult("User logged in successfully.");
    }
  }

  function logout() {
    handleUpdateUser({}); // pass empty data to the user that will log out the user
  }

return (
    <>
      {currentUser ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <>
          <div>
            <label style={{ backgroundColor: theme.background }}>
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
     <div>
      <button onClick={() => setTheme(themes.dark)}></button>
      </div>     
          
          <div>{result}</div>
        </>
      )}
    </>
  );
}

export default LoginForm;

{/* 
return (
    <>
      {currentUser ? (
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

          <button onClick={FormSubmitted}>Submit</button>
          <div>{result}</div>
        </>
      )}
    </>
  ); */}


{
  /*
  
  return (
    <>
      <div>
        <label>
          Email Address:
          <input
            {/* type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </label>
      </div>
      <div>
        <button onClick={() => FormSubmitted()}>Submit</button>
      </div>
      <div>{result}</div>
    </>
  );
}

  */
}
