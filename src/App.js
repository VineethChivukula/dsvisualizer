import React, { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import DataStructureVisualizer from "./components/DataStructureVisualizer";
import "./scrollbar.css";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#f3f4f6",
      paper: "#ffffff",
    },
    text: {
      primary: "#1976d2",
      secondary: "#4d4d4d",
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#23272f",
      paper: "#333840",
    },
    text: {
      primary: "#61dafb",
      secondary: "#ffffff",
    },
    primary: {
      main: "#61dafb",
    },
  },
});

/**
 * The main component of the application.
 *
 * @returns {JSX.Element} The rendered JSX element.
 */
function App() {
  const [theme, setTheme] = useState("light");
  const [selectedItem, setSelectedItem] = useState("Array");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  const handleSelect = (item) => {
    setSelectedItem(item);
  };

  const currentTheme = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <div
        className={
          theme === "light" ? "light-theme-scrollbar" : "dark-theme-scrollbar"
        }
        style={{ display: "flex", height: "100vh", flexDirection: "column" }}
      >
        <Navbar toggleTheme={toggleTheme} />
        <div style={{ display: "flex", flexGrow: 1, marginTop: "64px" }}>
          <Sidebar onSelect={handleSelect} />
          <div style={{ flexGrow: 1, padding: "16px" }}>
            <DataStructureVisualizer selectedItem={selectedItem} />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
