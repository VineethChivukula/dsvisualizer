import React, { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import DataStructureVisualizer from "./components/DataStructureVisualizer";
import Backdrop from "@mui/material/Backdrop";
import "./scrollbar.css";

// Create a light theme using MUI's createTheme function
const lightTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#f3f4f6",
      paper: "",
    },
    text: {
      primary: "#1976d2",
      secondary: "#4d4d4d",
    },
  },
});

// Create a dark theme using MUI's createTheme function
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#23272f",
      paper: "",
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
  // State variables for theme, selected item, and sidebar open/close
  const [theme, setTheme] = useState("light");
  const [selectedItem, setSelectedItem] = useState("Array");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Function to toggle between light and dark theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  // Function to handle item selection in the sidebar
  const handleSelect = (item) => {
    setSelectedItem(item);
    setSidebarOpen(false);
  };

  // Function to toggle the sidebar open/close
  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Determine the current theme based on the selected theme
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
        {/* Render the Navbar component */}
        <Navbar toggleTheme={toggleTheme} toggleSidebar={handleSidebarToggle} />

        {/* Render the backdrop for the sidebar */}
        <Backdrop
          open={sidebarOpen}
          onClick={handleSidebarToggle}
          sx={{
            zIndex: (theme) => theme.zIndex.drawer + 1,
            backdropFilter: "blur(4px)",
          }}
        />

        {/* Render the Sidebar component */}
        <Sidebar
          onSelect={handleSelect}
          theme={theme}
          open={sidebarOpen}
          onClose={handleSidebarToggle}
        />

        <div
          style={{
            display: "flex",
            flexGrow: 1,
            marginTop: "64px",
            overflow: "auto",
          }}
        >
          <div
            style={{
              flexGrow: 1,
              padding: "16px",
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
            }}
          >
            {/* Render the DataStructureVisualizer component */}
            <DataStructureVisualizer selectedItem={selectedItem} />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
