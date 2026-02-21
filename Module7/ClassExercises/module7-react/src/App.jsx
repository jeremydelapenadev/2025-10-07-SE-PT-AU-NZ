import './App.css'
import AppRoutes from './Components/AppRoutes'
import NavBar from './Components/NavBar'
import { UserProvider } from './Context/UserProvider'

import { ThemeProvider } from "@mui/material/styles";
import { tealTheme } from './themes/tealTheme';

function App() {

  return (
    <>
      <div>
        <UserProvider>
          <ThemeProvider theme={tealTheme}>
        <NavBar></NavBar>
        {/* <span><a href="/About">About</a></span>{" "}
        <span><a href="/Contact">Contact</a></span>{" "}
        <span><a href="/">Home</a></span>{" "}
        <span><a href="/dash">Dashboard</a></span>*/}
        <AppRoutes></AppRoutes></ThemeProvider></UserProvider>
      </div>
    </>
  )
}

export default App
