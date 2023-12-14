import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";

/* Context Variables */
import { UserProvider } from './contexts/UserContext';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>
);
