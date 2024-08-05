import React, { useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";

/**
 * Represents a TreeSet data structure.
 *
 * @constructor
 * @returns {TreeSet} The TreeSet object.
 */
function TreeSet() {
  // State variables to store the set and list
  const [treeSet, setTreeSet] = useState({ set: new Set(), list: [] });
  const [value, setValue] = useState("");

  // Function to handle adding a value to the set and list
  const handleAdd = () => {
    if (!treeSet.set.has(value)) {
      const newSet = new Set(treeSet.set).add(value);
      const newList = [...treeSet.list, value].sort();
      setTreeSet({ set: newSet, list: newList });
    }
    setValue("");
  };

  // Function to handle removing a value from the set and list
  const handleRemove = () => {
    if (treeSet.set.has(value)) {
      const newSet = new Set(treeSet.set);
      newSet.delete(value);
      const newList = treeSet.list.filter((item) => item !== value);
      setTreeSet({ set: newSet, list: newList });
    }
    setValue("");
  };

  // Function to check if a value exists in the set
  const handleContains = () => {
    if (treeSet.set.has(value)) {
      alert("Value exists in the TreeSet");
    } else {
      alert("Value does not exist in the TreeSet");
    }
    setValue("");
  };

  // Function to display the size of the set
  const handleSize = () => {
    alert(`TreeSet size: ${treeSet.set.size}`);
  };

  // Function to check if the set is empty
  const handleIsEmpty = () => {
    if (treeSet.set.size === 0) {
      alert("TreeSet is empty");
    } else {
      alert("TreeSet is not empty");
    }
  };

  // Function to clear the set and list
  const handleClear = () => {
    setTreeSet({ set: new Set(), list: [] });
  };

  return (
    <Box p={3} flexGrow={1}>
      {/* Input field for entering a value */}
      <TextField
        label="Value"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        variant="outlined"
        style={{ marginTop: -10 }}
      />
      <Box
        sx={{
          display: "flex",
          flexWrap: "nowrap",
          overflowX: "auto",
          mt: 2,
          mb: 2,
          gap: 1,
        }}
      >
        {/* Buttons for performing set operations */}
        <Button
          variant="contained"
          color="success"
          onClick={handleAdd}
          sx={{ minWidth: "140px", whiteSpace: "nowrap" }}
        >
          Add
        </Button>
        <Button
          variant="contained"
          color="error"
          onClick={handleRemove}
          sx={{ minWidth: "140px", whiteSpace: "nowrap" }}
        >
          Remove
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={handleContains}
          sx={{ minWidth: "140px", whiteSpace: "nowrap" }}
        >
          Contains
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleSize}
          sx={{ minWidth: "140px", whiteSpace: "nowrap" }}
        >
          Size
        </Button>
        <Button
          variant="contained"
          color="warning"
          onClick={handleIsEmpty}
          sx={{ minWidth: "140px", whiteSpace: "nowrap" }}
        >
          Is Empty?
        </Button>
        <Button
          variant="contained"
          color="error"
          onClick={handleClear}
          sx={{ minWidth: "140px", whiteSpace: "nowrap" }}
        >
          Clear
        </Button>
      </Box>
      <Box mt={3}>
        <Typography variant="h6">Tree Set</Typography>
        {/* Display the set values */}
        <Box display="flex" flexWrap="wrap">
          {treeSet.list.map((item, index) => (
            <Box
              key={index}
              bgcolor="primary.main"
              color="primary.contrastText"
              p={2}
              mt={1}
              textAlign="center"
              mr={1}
            >
              {item}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default TreeSet;
