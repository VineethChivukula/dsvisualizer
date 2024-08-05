import React, { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import DataStructureVisualizer from "./components/DataStructureVisualizer";
import Backdrop from "@mui/material/Backdrop";
import "./scrollbar.css";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#f3f4f6",
      paper: "",
    },
    text: {
      // primary: "#f3f4f6",
      secondary: "#4d4d4d",
    },
  },
});

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
  const [theme, setTheme] = useState("light");
  const [selectedItem, setSelectedItem] = useState("Array");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  const handleSelect = (item) => {
    setSelectedItem(item);
    setSidebarOpen(false);
  };

  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
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
        <Navbar toggleTheme={toggleTheme} toggleSidebar={handleSidebarToggle} />
        <Backdrop
          open={sidebarOpen}
          onClick={handleSidebarToggle}
          sx={{
            zIndex: (theme) => theme.zIndex.drawer + 1,
            backdropFilter: "blur(4px)",
          }}
        />
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
            <DataStructureVisualizer selectedItem={selectedItem} />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;