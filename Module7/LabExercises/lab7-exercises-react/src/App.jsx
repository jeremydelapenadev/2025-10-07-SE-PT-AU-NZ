import "./App.css";
import AppRoutes from "./components/AppRoutes";
import NavBar from "./components/NavBar";
import { EmojiProvider } from "./context/EmojiProvider";
import UserProvider from "./context/UserProvider";

function App() {
  return (
    <>
      <div>
        <UserProvider>
          <EmojiProvider>
            <NavBar></NavBar>
            <AppRoutes></AppRoutes>
          </EmojiProvider>
        </UserProvider>
      </div>
    </>
  );
}

export default App;
