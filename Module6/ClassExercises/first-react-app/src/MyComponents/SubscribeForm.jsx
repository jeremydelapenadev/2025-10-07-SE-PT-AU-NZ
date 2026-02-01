import { useState } from "react";
import { useFormInput } from "../Hooks/useFormInput";
import { useContext } from "react";
import { userContext } from "./UserProvider";

export default function SubscribeForm() {
  const [status, setStatus] = useState("");
  const { currentUser, handleUpdateUser } = useContext(userContext);
  /*
  // similar state variables mapped to form inputs
  const [firstName, setFirstName] = useState("Mary");
  const [email, setEmail] = useState("mary@poppins.com");
*/

  // eliminate the one above and replace with below:

  const [firstNameProps, firstnameReset] = useFormInput("Mary");
  const [emailProps, emailReset] = useFormInput("mary@poppins.com");

  // similar handler functions


  /*
  const handleNameChange = (e) => setFirstName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
*/
  function handleSubscribe() {
    /* setFirstName("");
    setEmail("");
*/

    firstnameReset("");
    emailReset("");
    setStatus("Thanks for subscribing!");
  }
  return (
    <>
      {currentUser.user ? (
        <div className="SubscribeForm componentBox">
          <label>
            First name:
            <input {...firstNameProps} />
          </label>

          <label>
            Email:
            <input {...emailProps} />
          </label>

          <button onClick={handleSubscribe}>Subscribe</button>
          <div>{status}</div>
        </div>
      ) : null}
    </>
  );
}
