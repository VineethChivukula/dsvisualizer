import React from "react";
import Box from "@mui/material/Box";
import Array from "../datastructures/Array";
import ArrayList from "../datastructures/ArrayList";
import SingleLinkedList from "../datastructures/SingleLinkedList";
import DoubleLinkedList from "../datastructures/DoubleLinkedList";
import CircularLinkedList from "../datastructures/CircularLinkedList";
import Stack from "../datastructures/Stack";
import Queue from "../datastructures/Queue";
import PriorityQueue from "../datastructures/PriorityQueue";
import Deque from "../datastructures/Deque";
import HashSet from "../datastructures/HashSet";
import LinkedHashSet from "../datastructures/LinkedHashSet";
import TreeSet from "../datastructures/TreeSet";
import HashMap from "../datastructures/HashMap";
import LinkedHashMap from "../datastructures/LinkedHashMap";
import TreeMap from "../datastructures/TreeMap";
import HashTable from "../datastructures/HashTable";

/**
 * Renders a visualizer component based on the selected data structure.
 *
 * @param {Object} props - The component props.
 * @param {string} props.selectedItem - The selected data structure.
 * @returns {JSX.Element} The visualizer component.
 */
function DataStructureVisualizer({ selectedItem }) {
  return (
    <Box p={3} flexGrow={1}>
      {/* Render the appropriate component based on the selected data structure */}
      {selectedItem === "Array" && <Array />}
      {selectedItem === "ArrayList" && <ArrayList />}
      {selectedItem === "SingleLinkedList" && <SingleLinkedList />}
      {selectedItem === "DoubleLinkedList" && <DoubleLinkedList />}
      {selectedItem === "CircularLinkedList" && <CircularLinkedList />}
      {selectedItem === "Stack" && <Stack />}
      {selectedItem === "Queue" && <Queue />}
      {selectedItem === "PriorityQueue" && <PriorityQueue />}
      {selectedItem === "Deque" && <Deque />}
      {selectedItem === "HashSet" && <HashSet />}
      {selectedItem === "LinkedHashSet" && <LinkedHashSet />}
      {selectedItem === "TreeSet" && <TreeSet />}
      {selectedItem === "HashMap" && <HashMap />}
      {selectedItem === "LinkedHashMap" && <LinkedHashMap />}
      {selectedItem === "TreeMap" && <TreeMap />}
      {selectedItem === "HashTable" && <HashTable />}
    </Box>
  );
}

export default DataStructureVisualizer;
