import React from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

const items = [
  " ",
  " ",
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
 * @returns {JSX.Element} The rendered sidebar component.
 */
function Sidebar({ onSelect, theme }) {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 200,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: 200, boxSizing: "border-box" },
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
          <ListItemButton key={text} onClick={() => onSelect(text)}>
            <ListItemText primary={text} />
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  );
}

export default Sidebar;
