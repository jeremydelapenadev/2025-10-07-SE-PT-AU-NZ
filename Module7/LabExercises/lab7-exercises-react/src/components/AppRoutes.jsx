import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import BitCoinRates from "./BitCoinRates";
import LoginForm from "./LoginForm";
import ProtectedRoute from "./ProtectedRoute";

function AppRoutes() {
  return (
    <>
      <Routes>
        <Route index element={<HomePage></HomePage>}></Route>
        <Route path="/login" element={<LoginForm></LoginForm>}></Route>
        <Route element={<ProtectedRoute />}>
        <Route path="/rates" element={<BitCoinRates></BitCoinRates>}></Route></Route>
      </Routes>
    </>
  );
}

export default AppRoutes;
