import "./App.css";
import AppRoutes from "./components/AppRoutes";
import NavBar from "./components/NavBar";
import { EmojiProvider } from "./context/EmojiProvider";
import UserProvider from "./context/UserProvider";
import { ThemeProvider } from "@mui/material/styles";
import { mainTheme } from "./themes/mainTheme";

function App() {
  return (
    <>
      <div>
        <ThemeProvider theme={mainTheme}><UserProvider>
          <EmojiProvider>
            <NavBar></NavBar>
            <AppRoutes></AppRoutes>
          </EmojiProvider>
        </UserProvider></ThemeProvider>
      </div>
    </>
  );
}

export default App;
