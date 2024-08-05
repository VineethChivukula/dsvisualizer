import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";
import IconButton from "@mui/material/IconButton";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import MenuIcon from "@mui/icons-material/Menu";

/**
 * Renders a navigation bar component.
 *
 * @param {Object} props - The component props.
 * @param {Function} props.toggleTheme - The function to toggle the theme.
 * @param {Function} props.toggleSidebar - The function to toggle the sidebar.
 * @returns {JSX.Element} The rendered Navbar component.
 */
function Navbar({ toggleTheme, toggleSidebar }) {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const handleThemeToggle = () => {
    setIsDarkTheme(!isDarkTheme);
    toggleTheme();
  };

  return (
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <IconButton color="inherit" onClick={toggleSidebar}>
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          sx={{ flexGrow: 1, textAlign: "center" }}
        >
          Data Structure Visualizer
        </Typography>
        <IconButton color="inherit" onClick={handleThemeToggle}>
          {isDarkTheme ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
        <IconButton
          color="inherit"
          href="https://github.com/VineethChivukula/dsvisualizer"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
