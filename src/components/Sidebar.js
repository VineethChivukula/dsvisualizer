import React from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

const items = [
  "Array",
  "ArrayList",
  "SingleLinkedList",
  "DoubleLinkedList",
  "CircularLinkedList",
  "Stack",
  "Queue",
  "PriorityQueue",
  "Deque",
  "HashSet",
  "LinkedHashSet",
  "TreeSet",
  "HashMap",
  "LinkedHashMap",
  "TreeMap",
  "HashTable",
];

/**
 * Renders a sidebar component.
 *
 * @param {Object} props - The component props.
 * @param {Function} props.onSelect - The function to be called when an item is selected.
 * @param {string} props.theme - The theme of the sidebar.
 * @param {boolean} props.open - Indicates if the sidebar is open.
 * @param {Function} props.onClose - The function to close the sidebar.
 * @returns {JSX.Element} The rendered sidebar component.
 */
function Sidebar({ onSelect, theme, open, onClose }) {
  const scrollbarColor = theme === "light" ? "#f3f4f6" : "#4d4d4d";

  return (
    <Drawer
      variant="temporary"
      open={open}
      onClose={onClose}
      ModalProps={{
        keepMounted: true,
      }}
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 2,
        width: 240,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: 240, boxSizing: "border-box" },
      }}
    >
      <List
        className={
          theme === "light" ? "light-theme-scrollbar" : "dark-theme-scrollbar"
        }
        sx={{
          height: "100%",
          overflow: "auto",
        }}
      >
        {items.map((text) => (
          <ListItemButton
            key={text}
            onClick={() => {
              onSelect(text);
              onClose();
            }}
          >
            <ListItemText primary={text} sx={{ color: scrollbarColor }} />
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  );
}

export default Sidebar;