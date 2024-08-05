import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

/**
 * Creates a root for rendering React components.
 *
 * @param {HTMLElement} root - The root element to render the components into.
 * @returns {ReactDOM.Root} The created root object.
 */
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
