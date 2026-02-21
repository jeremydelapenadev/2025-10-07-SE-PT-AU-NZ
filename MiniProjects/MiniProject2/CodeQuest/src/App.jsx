import "./App.css";
import AppRoutes from "./components/AppRoutes";
import NavBar from "./components/NavBar";
import UserProvider from "./context/UserProvider";

function App() {
  return (
    <>
      <div>
        <UserProvider>
          <NavBar></NavBar>
          <AppRoutes></AppRoutes>
        </UserProvider>
      </div>
    </>
  );
}

export default App;
