import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import { ErrorBoundary } from "react-error-boundary";
import App from "./App.jsx";
// import ErrorMessage from "./MyComponents/ErrorMessage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* StrictMode is a tool for highlighting potential problems in an application. */}
    <App />
  </StrictMode>
);
  {/*<ErrorBoundary FallbackComponent={ErrorMessage}>
    <App />  can wrap App or other high-level parent components 
  </ErrorBoundary>,*/}

