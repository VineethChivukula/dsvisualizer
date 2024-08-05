import React, { useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";

/**
 * Represents a TreeMap data structure.
 *
 * @component
 * @returns {JSX.Element} The rendered TreeMap component.
 */
function TreeMap() {
  // State variables
  const [treeMap, setTreeMap] = useState(new Map());
  const [key, setKey] = useState("");
  const [value, setValue] = useState("");

  // Add key-value pair to the TreeMap
  const handleAdd = () => {
    const newMap = new Map(treeMap);
    newMap.set(key, value);
    setTreeMap(new Map([...newMap.entries()].sort()));
    setKey("");
    setValue("");
  };

  // Remove key-value pair from the TreeMap
  const handleRemove = () => {
    const newMap = new Map(treeMap);
    newMap.delete(key);
    setTreeMap(new Map([...newMap.entries()].sort()));
    setKey("");
  };

  // Check if key exists in the TreeMap
  const handleContainsKey = () => {
    if (treeMap.has(key)) {
      alert("Key exists in the TreeMap");
    } else {
      alert("Key does not exist in the TreeMap");
    }
    setKey("");
  };

  // Get the value for a given key in the TreeMap
  const handleGetValue = () => {
    if (treeMap.has(key)) {
      alert(`Value for key "${key}": ${treeMap.get(key)}`);
    } else {
      alert("Key does not exist in the TreeMap");
    }
    setKey("");
  };

  // Get the size of the TreeMap
  const handleSize = () => {
    alert(`TreeMap size: ${treeMap.size}`);
  };

  // Check if the TreeMap is empty
  const handleIsEmpty = () => {
    if (treeMap.size === 0) {
      alert("TreeMap is empty");
    } else {
      alert("TreeMap is not empty");
    }
  };

  // Clear the TreeMap
  const handleClear = () => {
    setTreeMap(new Map());
  };

  return (
    <Box p={3} flexGrow={1}>
      {/* Input fields for key and value */}
      <TextField
        label="Key"
        value={key}
        onChange={(e) => setKey(e.target.value)}
        variant="outlined"
        style={{ marginTop: -10 }}
      />
      <TextField
        label="Value"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        variant="outlined"
        style={{ marginTop: -10, marginLeft: 10 }}
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
        {/* Buttons for various TreeMap operations */}
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
          onClick={handleContainsKey}
          sx={{ minWidth: "140px", whiteSpace: "nowrap" }}
        >
          Contains Key
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={handleGetValue}
          sx={{ minWidth: "140px", whiteSpace: "nowrap" }}
        >
          Get Value
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
        <Typography variant="h6">Tree Map</Typography>
        {/* Display the TreeMap */}
        <Box display="flex" flexWrap="wrap">
          {[...treeMap.entries()].map(([k, v], index) => (
            <Box
              key={index}
              bgcolor="primary.main"
              color="primary.contrastText"
              p={2}
              mt={1}
              textAlign="center"
              mr={1}
            >
              {`${k}: ${v}`}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default TreeMap;
