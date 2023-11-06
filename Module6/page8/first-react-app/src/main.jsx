import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// add to main.jsx or App.jsx wrapped around top components
// to catch errors thrown by ANY children and render a fallback
// component instead of an error
// first do npm install react-error-boundary
import { ErrorBoundary } from "react-error-boundary";
import ErrorMessage from "./components/ErrorMessage.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // This StrictMode render component twice just to make sure you are writing pure component.
  // If you are writing pure component whether you writing multiple times the value doesn't change.
  // StrictMode only works for development environment, not production.
  <React.StrictMode>
    <ErrorBoundary FallbackComponent={ErrorMessage}>
      <App /> {/* can wrap App or other high-level parent components */}
    </ErrorBoundary>
  </React.StrictMode>
);
