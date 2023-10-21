import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  // This StrictMode render component twice just to make sure you are writing pure component.
  // If you are writing pure component whether you writing multiple times the value doesn't change.
  // StrictMode only works for development environment, not production.
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
