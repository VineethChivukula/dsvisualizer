import React from "react"; // Importing the React library
import ReactDOM from "react-dom/client"; // Importing the ReactDOM library
import "./index.css"; // Importing the CSS file
import App from "./App"; // Importing the App component

/**
 * Creates a root for rendering React components.
 *
 * @param {HTMLElement} root - The root element to render the components into.
 * @returns {ReactDOM.Root} The created root object.
 */
const root = ReactDOM.createRoot(document.getElementById("root")); // Creating a root object to render components into
root.render(
  <React.StrictMode>
    {" "}
    {/* Wrapping the App component with React.StrictMode */}
    <App /> {/* Rendering the App component */}
  </React.StrictMode>
);
