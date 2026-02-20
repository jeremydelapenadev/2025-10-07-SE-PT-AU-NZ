// STEP 1: Create a context
import { createContext } from "react";
import { useState } from "react";

export const userContext = createContext();

export function UserProvider({children}) {
  // store current user -- using useState (only available in that component, unless stored in context)
  const [currentUser, setCurrentUser] = useState(null);

  function handleUpdateUser(user) {
    // will take the 'user' object
    setCurrentUser(user);
  }

  // set action for logging out the user
function logout() {
    setCurrentUser(null);
  }

  return (
    <>
      <userContext.Provider value={{ currentUser, handleUpdateUser, logout }}>
        {children}
        {/* add handleUpdateUser so it can be accessed by other components */}
      </userContext.Provider>
    </>
  );
}
